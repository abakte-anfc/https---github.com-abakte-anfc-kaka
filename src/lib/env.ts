function validateSiteUrl(value: string | undefined): string | undefined {
  if (!value?.trim()) return undefined;
  const url = new URL(value);
  if (url.protocol !== 'https:' && !(url.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(url.hostname))) {
    throw new Error('NEXT_PUBLIC_SITE_URL deve usar HTTPS ou localhost.');
  }
  if (url.username || url.password) throw new Error('O domínio não pode conter credenciais.');
  return url.origin;
}

export const env = {
  siteUrl: validateSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() || '',
};
