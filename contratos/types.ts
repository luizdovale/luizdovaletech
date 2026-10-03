export type FieldType = 'text' | 'cnpj' | 'cpf' | 'email' | 'tel' | 'date' | 'money' | 'words' | 'number' | 'textarea';

export interface TemplateVariable {
  key: string;
  label: string;
  type: FieldType;
  group?: string;
  required?: boolean;
  default?: string;
  placeholder?: string;
  /** Para type "words": chave do campo de valor (R$) que gera o texto por extenso. */
  words_of?: string;
}

export interface TemplateSigner {
  role: string;
  label: string;
  name: string;
  cpf: string;
  email?: string;
}

export interface ContractTemplate {
  id: string;
  slug: string;
  version: number;
  name: string;
  title: string;
  description: string | null;
  body_html: string;
  variables: TemplateVariable[];
  signers: TemplateSigner[];
  link_valid_days: number;
  active: boolean;
  created_at: string;
}

export type ContractStatus = 'aguardando' | 'parcial' | 'assinado' | 'cancelado';

export interface SignerSummary {
  id?: string;
  role: string;
  role_label: string;
  name: string;
  signed_at: string | null;
  position: number;
}

export interface ContractSummary {
  id: string;
  template_id: string;
  label: string;
  title: string;
  status: ContractStatus;
  created_at: string;
  expires_at: string;
  completed_at: string | null;
  contract_signers: SignerSummary[];
}

export interface SignerFull extends SignerSummary {
  cpf: string;
  email: string | null;
  token: string;
  failed_attempts: number;
  signed_name: string | null;
  signed_cpf: string | null;
  name_matches: boolean | null;
  signature_png: string | null;
  read_to_end: boolean | null;
  ip: string | null;
  forwarded_for: string | null;
  user_agent: string | null;
  seal_sha256: string | null;
}

export interface ContractFull {
  id: string;
  template_id: string;
  template_slug: string;
  template_version: number;
  title: string;
  label: string;
  field_values: Record<string, string>;
  body_html: string;
  body_sha256: string;
  status: ContractStatus;
  expires_at: string;
  created_at: string;
  completed_at: string | null;
  cancelled_at: string | null;
  contract_signers: SignerFull[];
}

export interface ContractEvent {
  id: number;
  contract_id: string;
  signer_id: string | null;
  kind: string;
  ip: string | null;
  user_agent: string | null;
  details: Record<string, unknown> | null;
  created_at: string;
}

export interface SigningParty {
  role: string;
  label: string;
  name: string;
  signed_at: string | null;
  signature_png: string | null;
  is_you: boolean;
}

export interface SigningData {
  state: 'aberto' | 'assinado' | 'expirado' | 'cancelado';
  contract: {
    title: string;
    status: ContractStatus;
    expires_at: string;
    created_at: string;
    completed_at: string | null;
    sha256: string;
    body_html: string | null;
  };
  you: {
    role: string;
    label: string;
    name: string;
    cpf_masked: string | null;
    signed_at: string | null;
    seal: string | null;
  };
  parties: SigningParty[];
}

export type SignResult =
  | { ok: true; signed_at: string; contract_status: ContractStatus; seal: string }
  | { ok: false; error: string; attempts_left?: number };

export interface CreatedContract {
  contract_id: string;
  expires_at: string;
  signers: { role: string; label: string; name: string; token: string }[];
}
