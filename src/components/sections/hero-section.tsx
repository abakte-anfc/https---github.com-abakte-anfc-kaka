import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import { site } from '@/data/site';
import { MediaSlot } from '@/components/ui/media-slot';
import { QuoteLink } from '@/components/ui/quote-link';
import { SplitText } from '@/components/ui/split-text';

export function HeroSection() {
  return <section className="hero" id="inicio" aria-labelledby="hero-title">
    <div className="container hero-grid">
      <div className="hero-copy"><div className="eyebrow hero-eyebrow"><span className="status-dot" /> PRA QUEM GOSTA DE CARRO.</div>
        <h1 id="hero-title" aria-label="Seu carro. Seu estilo. Sua KaKa."><SplitText className="hero-split" tag="span" delay={26} duration={0.85} threshold={0.12} rootMargin="-56px" from={{ opacity: 0, y: 56, rotateX: -24 }} to={{ opacity: 1, y: 0, rotateX: 0 }}>
          <span className="hero-title-line">Seu carro.</span><span className="hero-title-line">Seu estilo.</span><span className="hero-title-line hero-title-accent">Sua KaKa.</span>
        </SplitText></h1>
        <p>Pneus e rodas para o próximo capítulo do seu carro. Encontre o seu estilo e consulte as opções com a nossa equipe.</p>
        <div className="hero-actions"><QuoteLink /><a href="#produtos" className="button button-outline">Explorar produtos <ArrowDown size={18} aria-hidden="true" /></a></div>
        <div className="hero-location"><MapPin size={16} aria-hidden="true" /><span>De Feira de Santana para o seu dia a dia.</span></div>
      </div>
      <div className="hero-visual"><div className="visual-index"><span>KaKa / GARAGE</span><span>01 — 04</span></div><MediaSlot media={site.hero} variant="hero" priority /><div className="visual-footer"><span>O detalhe faz a diferença.</span><ArrowUpRight size={28} aria-hidden="true" /></div></div>
    </div>
    <div className="hero-bottom container"><span>PNEUS <b aria-hidden="true">/</b> RODAS <b aria-hidden="true">/</b> PERSONALIDADE</span><a href="#produtos">Bora conhecer <ArrowDown size={14} aria-hidden="true" /></a></div>
  </section>;
}
