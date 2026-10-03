const BLOCKED_TAGS = new Set([
  'script', 'iframe', 'object', 'embed', 'link', 'meta', 'style', 'form', 'input', 'button',
  'textarea', 'select', 'base', 'svg', 'math', 'audio', 'video',
]);

/**
 * O texto dos contratos vem do banco e só o administrador escreve nele, mas a página de assinatura é pública:
 * por segurança, tudo que é executável é removido antes de renderizar.
 */
export function sanitizeHtml(html: string): string {
  const doc = new DOMParser().parseFromString(`<body>${html}</body>`, 'text/html');
  doc.body.querySelectorAll('*').forEach((el) => {
    if (BLOCKED_TAGS.has(el.tagName.toLowerCase())) {
      el.remove();
      return;
    }
    Array.from(el.attributes).forEach((attr) => {
      const name = attr.name.toLowerCase();
      const value = attr.value;
      const isEvent = name.startsWith('on');
      const isDangerousUrl =
        ['href', 'src', 'xlink:href', 'formaction'].includes(name) && /^\s*(javascript|data|vbscript):/i.test(value);
      const isDangerousStyle = name === 'style' && /url\(|expression\(|@import|behavior:/i.test(value);
      if (isEvent || isDangerousUrl || isDangerousStyle) el.removeAttribute(attr.name);
    });
  });
  return doc.body.innerHTML;
}
