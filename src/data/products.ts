import type { ProductCategory } from '@/types/content';
export const products: ProductCategory[] = [
  {
    slug: 'pneus', name: 'Pneus', number: '01',
    description: 'O próximo jogo de pneus começa com a medida certa. Consulte opções para o seu veículo com a nossa equipe.',
    media: { src: '', alt: 'Pneus na KaKa Pneus & Rodas', kind: 'image', label: 'Foto dos pneus' },
  },
  {
    slug: 'rodas', name: 'Rodas', number: '02',
    description: 'Um novo visual para o seu carro. Converse com a equipe sobre modelos, medidas e compatibilidade.',
    media: { src: '', alt: 'Rodas na KaKa Pneus & Rodas', kind: 'image', label: 'Foto das rodas' },
  },
];
