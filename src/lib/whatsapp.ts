export function buildWhatsAppUrl(number: string, message: string): string {
  if (!/^[1-9]\d{9,14}$/.test(number)) throw new Error('Use o número oficial com DDI e DDD, apenas dígitos.');
  if (!message.trim() || message.length > 1500) throw new Error('Mensagem de contato inválida.');
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function getQuoteLink(number: string, context?: string): { href: string; external: boolean } {
  if (!number) return { href: '#contato', external: false };
  const message = `Olá! Vim pelo site da KaKa Pneus & Rodas e gostaria de um orçamento${context ? ` de ${context}` : ''}. Meu veículo é: `;
  return { href: buildWhatsAppUrl(number, message), external: true };
}
