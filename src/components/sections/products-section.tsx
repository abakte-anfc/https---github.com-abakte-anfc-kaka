import { ArrowUpRight } from 'lucide-react';
import { products } from '@/data/products';
import { MediaSlot } from '@/components/ui/media-slot';
import { QuoteLink } from '@/components/ui/quote-link';

export function ProductsSection() {
  return <section id="produtos" className="section products-section" aria-labelledby="products-title" data-motion-section><div className="container">
    <div className="section-heading"><div data-motion-item><span className="eyebrow">01 / PRODUTOS</span><h2 id="products-title">Um upgrade.<br /><span>Do seu jeito.</span></h2></div><p data-motion-item>Do contato com a estrada ao visual que chama sua atenção. Comece pelo que você procura.</p></div>
    <div className="product-grid">{products.map(product => <article className="product-card" key={product.slug} data-motion-item>
      <div className="product-image"><span className="card-index">/{product.number}</span><MediaSlot media={product.media} variant={product.slug === 'pneus' ? 'pneus' : 'rodas'} /></div>
      <div className="product-body"><div className="product-heading"><h3>{product.name}</h3><ArrowUpRight size={28} aria-hidden="true" /></div><p>{product.description}</p><QuoteLink context={product.name} className="product-quote" compact>Consultar {product.name.toLowerCase()}</QuoteLink></div>
    </article>)}</div>
    <p className="catalog-note">Medidas, modelos, compatibilidade e disponibilidade são confirmados pela equipe no orçamento.</p>
  </div></section>;
}
