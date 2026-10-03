import { supabase } from './supabase';
import type {
  ContractEvent,
  ContractFull,
  ContractSummary,
  ContractTemplate,
  CreatedContract,
  SigningData,
  SignResult,
  TemplateSigner,
  TemplateVariable,
} from './types';

const FRIENDLY: Array<[RegExp, string]> = [
  [/Invalid login credentials/i, 'E-mail ou senha incorretos.'],
  [/Email not confirmed/i, 'Este e-mail ainda não foi confirmado.'],
  [/rate limit|too many requests|over_request_rate_limit/i, 'Muitas tentativas. Aguarde um pouco e tente de novo.'],
  [/permission denied|Acesso negado/i, 'Você não tem permissão para fazer isso.'],
  [/Failed to fetch|NetworkError|Load failed/i, 'Sem conexão. Verifique sua internet e tente de novo.'],
];

function friendly(error: unknown): string {
  const raw =
    error instanceof Error
      ? error.message
      : typeof error === 'object' && error && 'message' in error
        ? String((error as { message: unknown }).message)
        : String(error);
  return FRIENDLY.find(([re]) => re.test(raw))?.[1] ?? raw;
}

function unwrap<T>(res: { data: T | null; error: { message: string } | null }): T {
  if (res.error) throw new Error(friendly(res.error));
  return res.data as T;
}

/* ───────── autenticação ───────── */

export async function signIn(email: string, password: string): Promise<void> {
  const { error } = await supabase.auth.signInWithPassword({ email: email.trim().toLowerCase(), password });
  if (error) throw new Error(friendly(error));
}

export async function signOut(): Promise<void> {
  await supabase.auth.signOut();
}

export async function checkIsAdmin(): Promise<boolean> {
  const { data, error } = await supabase.rpc('is_admin');
  if (error) return false;
  return data === true;
}

/* ───────── administração ───────── */

export async function listTemplates(): Promise<ContractTemplate[]> {
  const rows = unwrap(
    await supabase
      .from('contract_templates')
      .select('*')
      .eq('active', true)
      .order('slug', { ascending: true })
      .order('version', { ascending: false }),
  ) as ContractTemplate[];
  const seen = new Set<string>();
  return rows.filter((t) => (seen.has(t.slug) ? false : (seen.add(t.slug), true)));
}

export async function getTemplateBySlug(slug: string): Promise<ContractTemplate | null> {
  const rows = unwrap(
    await supabase
      .from('contract_templates')
      .select('*')
      .eq('slug', slug)
      .eq('active', true)
      .order('version', { ascending: false })
      .limit(1),
  ) as ContractTemplate[];
  return rows[0] ?? null;
}

export async function createTemplate(input: {
  slug: string;
  name: string;
  title: string;
  description: string;
  body_html: string;
  variables: TemplateVariable[];
  signers: TemplateSigner[];
  link_valid_days: number;
}): Promise<ContractTemplate> {
  const latest = unwrap(
    await supabase
      .from('contract_templates')
      .select('version')
      .eq('slug', input.slug)
      .order('version', { ascending: false })
      .limit(1),
  ) as { version: number }[];
  const version = (latest[0]?.version ?? 0) + 1;
  return unwrap(
    await supabase.from('contract_templates').insert({ ...input, version }).select('*').single(),
  ) as ContractTemplate;
}

const SUMMARY_COLUMNS =
  'id, template_id, label, title, status, created_at, expires_at, completed_at, contract_signers(id, role, role_label, name, signed_at, position)';

export async function listContracts(templateId?: string): Promise<ContractSummary[]> {
  let query = supabase.from('contracts').select(SUMMARY_COLUMNS).order('created_at', { ascending: false });
  if (templateId) query = query.eq('template_id', templateId);
  const rows = unwrap(await query) as unknown as ContractSummary[];
  rows.forEach((c) => c.contract_signers.sort((a, b) => a.position - b.position));
  return rows;
}

export async function getContract(id: string): Promise<{ contract: ContractFull; events: ContractEvent[] }> {
  const contract = unwrap(
    await supabase.from('contracts').select('*, contract_signers(*)').eq('id', id).single(),
  ) as unknown as ContractFull;
  contract.contract_signers.sort((a, b) => a.position - b.position);
  const events = unwrap(
    await supabase.from('contract_events').select('*').eq('contract_id', id).order('id', { ascending: true }),
  ) as ContractEvent[];
  return { contract, events };
}

/**
 * Contrato completo a partir do token de um assinante. Só funciona com o administrador logado (as tabelas são
 * protegidas por RLS); para qualquer outra pessoa devolve null. Usado na tela pós-assinatura para oferecer
 * "Enviar para o contratante" sem expor o link da outra parte a quem tem só o próprio link.
 */
export async function getContractByToken(token: string): Promise<ContractFull | null> {
  try {
    const { data: auth } = await supabase.auth.getSession();
    if (!auth.session) return null; // sem login não há o que buscar (e o contratante nem chega a fazer essa chamada)
    const { data } = await supabase.from('contract_signers').select('contract_id').eq('token', token).maybeSingle();
    if (!data) return null;
    return (await getContract(data.contract_id)).contract;
  } catch {
    return null;
  }
}

export async function createContract(
  templateId: string,
  label: string,
  values: Record<string, string>,
  validDays: number,
): Promise<CreatedContract> {
  const { data, error } = await supabase.rpc('create_contract', {
    p_template_id: templateId,
    p_label: label,
    p_values: values,
    p_valid_days: validDays,
  });
  if (error) throw new Error(friendly(error));
  return data as CreatedContract;
}

export async function cancelContract(id: string): Promise<void> {
  const { error } = await supabase.rpc('cancel_contract', { p_contract_id: id });
  if (error) throw new Error(friendly(error));
}

export async function extendContract(id: string, days: number): Promise<string> {
  const { data, error } = await supabase.rpc('extend_contract', { p_contract_id: id, p_days: days });
  if (error) throw new Error(friendly(error));
  return data as string;
}

/* ───────── público (assinatura por token) ───────── */

export async function getSigningData(token: string): Promise<SigningData | null> {
  const { data, error } = await supabase.rpc('get_signing_data', { p_token: token });
  if (error) throw new Error(friendly(error));
  return (data as SigningData | null) ?? null;
}

export async function signContract(input: {
  token: string;
  name: string;
  cpf: string;
  signature: string;
  readToEnd: boolean;
}): Promise<SignResult> {
  const { data, error } = await supabase.rpc('sign_contract', {
    p_token: input.token,
    p_name: input.name,
    p_cpf: input.cpf,
    p_signature: input.signature,
    p_read_to_end: input.readToEnd,
  });
  if (error) throw new Error(friendly(error));
  return data as SignResult;
}

export const SIGN_ERRORS: Record<string, string> = {
  link_invalido: 'Este link não é válido.',
  contrato_cancelado: 'Este contrato foi cancelado.',
  ja_assinado: 'Você já assinou este contrato.',
  link_expirado: 'Este link expirou. Peça um novo link a quem enviou o contrato.',
  bloqueado: 'Muitas tentativas incorretas. Peça um novo link a quem enviou o contrato.',
  leitura_incompleta: 'Role o contrato até o final antes de assinar.',
  nome_invalido: 'Digite seu nome completo.',
  assinatura_invalida: 'Faça sua assinatura no quadro.',
  dados_nao_conferem: 'O CPF não confere com o informado no contrato.',
};

export function signingUrl(token: string): string {
  return `${window.location.origin}/contratos/assinar/${token}`;
}
