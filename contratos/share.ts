import { signingUrl } from './api';
import { formatDate, onlyDigits } from './format';
import type { ContractFull, SignerFull } from './types';

function firstName(full: string): string {
  const first = full.trim().split(/\s+/)[0] ?? '';
  return first ? first.charAt(0).toUpperCase() + first.slice(1).toLowerCase() : '';
}

/** "Contrato de Licença de Uso … — JPS ERP" vira "JPS ERP" (o que o cliente reconhece numa mensagem curta). */
function shortTitle(contract: ContractFull): string {
  return (contract.title.split(' — ').pop() ?? contract.title).trim();
}

/** Mensagem pronta + atalhos de envio (WhatsApp com o telefone já preenchido, e-mail) para um assinante. */
export function shareLinks(contract: ContractFull, signer: SignerFull) {
  const url = signingUrl(signer.token);
  const first = firstName(signer.name);
  const text =
    `Olá${first ? `, ${first}` : ''}! Segue o link para você ler e assinar o contrato "${shortTitle(contract)}", ` +
    `da ValeTech Soluções. O link é válido até ${formatDate(contract.expires_at)}:\n${url}`;

  // o telefone vem do campo "<papel>_telefone" do contrato (ex.: contratante_telefone), se o modelo tiver
  const digits = onlyDigits(contract.field_values[`${signer.role}_telefone`] ?? '');
  const phone = digits.length >= 12 && digits.startsWith('55') ? digits : digits.length >= 10 ? `55${digits}` : '';

  const subject = `Contrato para assinatura — ${shortTitle(contract)}`;
  return {
    url,
    hasPhone: Boolean(phone),
    whatsapp: `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
    mailto: signer.email
      ? `mailto:${signer.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`
      : null,
  };
}
