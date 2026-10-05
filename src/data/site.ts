// Substitua os caminhos vazios pelas mídias autorizadas em public/.
// Exemplo: src: '/images/hero.webp'. Não é necessário editar os componentes.
import type { MediaAsset } from '@/types/content';

export const site = {
  name: 'KaKa Pneus & Rodas',
  city: 'Feira de Santana',
  region: 'Bahia',
  instagramUrl: 'https://www.instagram.com/kakapneuserodas_/',
  instagramHandle: '@kakapneuserodas_',
  // Logo oficial opcional. Exemplo: '/images/logo.png'.
  logo: '',
  hero: { src: '', alt: 'Rodas, pneus e veículos na KaKa Pneus & Rodas', kind: 'image', label: 'Sua próxima foto de destaque' } satisfies MediaAsset,
  gallery: [
    { src: '', alt: 'Detalhes de uma roda na KaKa Pneus & Rodas', kind: 'image', label: 'Rodas em detalhe' },
    { src: '', alt: 'Veículo com rodas instaladas na KaKa', kind: 'image', label: 'Seu carro, seu estilo' },
    { src: '', alt: 'Ambiente da loja KaKa Pneus & Rodas', kind: 'image', label: 'Por dentro da KaKa' },
    { src: '', alt: 'Apresentação em vídeo da KaKa Pneus & Rodas', kind: 'video', label: 'A KaKa em movimento', poster: '' },
  ] satisfies MediaAsset[],
} as const;

export const navigation = [
  { href: '#produtos', label: 'Produtos' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#orcamento', label: 'Como pedir' },
  { href: '#contato', label: 'Contato' },
];
