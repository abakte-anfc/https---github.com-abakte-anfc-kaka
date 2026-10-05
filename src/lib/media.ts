export function validateLocalMedia(src: string): string {
  if (!src) return '';
  if (!/^\/(images|videos)\/[a-zA-Z0-9_./-]+\.(webp|png|jpe?g|avif|mp4|webm)$/i.test(src) || src.includes('..')) {
    throw new Error('Use um arquivo local em /images/ ou /videos/ com extensão suportada.');
  }
  return src;
}
