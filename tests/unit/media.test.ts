import { describe, expect, it } from 'vitest';
import { validateLocalMedia } from '../../src/lib/media';

describe('mídias locais', () => {
  it('aceita mídia dentro da pasta pública', () => {
    expect(validateLocalMedia('/images/loja.webp')).toBe('/images/loja.webp');
    expect(validateLocalMedia('/videos/apresentacao.mp4')).toBe('/videos/apresentacao.mp4');
  });
  it('aceita espaço reservado sem mídia', () => {
    expect(validateLocalMedia('')).toBe('');
  });
  it.each(['https://example.com/a.jpg', 'javascript:alert(1)', '//example.com/a.jpg', '/images/../secret', '/images/a.svg', '/videos/a.exe'])('rejeita caminho não suportado: %s', (value) => {
    expect(() => validateLocalMedia(value)).toThrow();
  });
});
