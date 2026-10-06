import { ArrowUpRight, Instagram } from 'lucide-react';
import { site } from '@/data/site';
import { Brand } from './site-header';
export function SiteFooter() {
  return <footer className="site-footer" data-motion-section><div className="container"><div className="footer-main"><div data-motion-item><Brand footer /><p>Pneus. Rodas. O seu jeito de rodar.</p></div><nav aria-label="Links do rodapé">{[
    ['#produtos', 'Produtos'], ['#galeria', 'Galeria'], ['#orcamento', 'Como pedir orçamento'], ['#contato', 'Contato'],
  ].map(([href, label]) => <a href={href} key={href} data-motion-item>{label}</a>)}</nav><a className="footer-social" href={site.instagramUrl} target="_blank" rel="noopener noreferrer" data-motion-item><Instagram size={20} aria-hidden="true" /> Instagram <ArrowUpRight size={16} aria-hidden="true" /></a></div><div className="footer-bottom" data-motion-item><span>© {new Date().getFullYear()} KaKa Pneus & Rodas.</span><span>Feira de Santana · Bahia</span><a href="#inicio">Voltar ao topo ↑</a></div></div></footer>;
}
