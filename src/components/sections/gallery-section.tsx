import { ArrowUpRight, Instagram } from 'lucide-react';
import { site } from '@/data/site';
import { MediaSlot } from '@/components/ui/media-slot';

export function GallerySection() {
  return <section id="galeria" className="section gallery-section" aria-labelledby="gallery-title"><div className="container">
    <div className="section-heading"><div><span className="eyebrow">02 / NOSSO UNIVERSO</span><h2 id="gallery-title">Tem detalhe.<br /><span>Tem personalidade.</span></h2></div><div className="gallery-heading-side"><p>Produtos, carros e o dia a dia da KaKa. Um espaço para mostrar o que move a gente.</p><a href={site.instagramUrl} className="text-link" target="_blank" rel="noopener noreferrer"><Instagram size={17} aria-hidden="true" /> Veja no Instagram <ArrowUpRight size={17} aria-hidden="true" /></a></div></div>
    <div className="gallery-grid">{site.gallery.map((media, index) => <figure className={`gallery-item gallery-item-${index}`} key={media.label}><MediaSlot media={media} /><figcaption><span>{media.label}</span><span className="gallery-kind">{media.kind === 'video' ? 'VÍDEO' : 'FOTO'} <ArrowUpRight size={14} aria-hidden="true" /></span></figcaption></figure>)}</div>
  </div></section>;
}
