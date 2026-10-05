export type MediaAsset = {
  src: string;
  alt: string;
  kind: 'image' | 'video';
  poster?: string;
  label: string;
};
export type ProductCategory = {
  slug: string;
  name: string;
  description: string;
  number: string;
  media: MediaAsset;
};
export type Service = { slug: string; name: string; description: string; active: boolean };
export type Location = {
  slug: string;
  name: string;
  address: string;
  hours: string;
  mapUrl: string;
  active: boolean;
};
