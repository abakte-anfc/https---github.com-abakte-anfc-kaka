import { describe, expect, it } from 'vitest';
import { buildWhatsAppUrl, getQuoteLink } from '../../src/lib/whatsapp';

describe('contato comercial', () => {
  it('codifica a mensagem e preserva o número confirmado', () => {
    const result = new URL(buildWhatsAppUrl('5575999991234', 'Olá! Pneus & rodas?'));
    expect(result.origin).toBe('https://wa.me');
    expect(result.pathname).toBe('/5575999991234');
    expect(result.searchParams.get('text')).toBe('Olá! Pneus & rodas?');
  });
  it.each(['', '+55 75 99999-1234', 'javascript:alert(1)', '123', '0'.repeat(20)])('rejeita número inválido: %s', (value) => {
    expect(() => buildWhatsAppUrl(value, 'Olá')).toThrow();
  });
  it('não inventa um WhatsApp quando falta configuração', () => {
    expect(getQuoteLink('', 'Pneus')).toEqual({ href: '#contato', external: false });
  });
  it('gera contato contextual quando o número está configurado', () => {
    const result = getQuoteLink('5575999991234', 'Rodas');
    expect(result.external).toBe(true);
    expect(new URL(result.href).searchParams.get('text')).toContain('Rodas');
  });
});
