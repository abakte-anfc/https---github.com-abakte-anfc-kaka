import { ArrowUpRight, Instagram } from 'lucide-react';
import { site } from '@/data/site';
import { Brand } from './site-header';
export function SiteFooter() {
  return <footer className="site-footer"><div className="container"><div className="footer-main"><div><Brand footer /><p>Pneus. Rodas. O seu jeito de rodar.</p></div><nav aria-label="Links do rodapé"><a href="#produtos">Produtos</a><a href="#galeria">Galeria</a><a href="#orcamento">Como pedir orçamento</a><a href="#contato">Contato</a></nav><a className="footer-social" href={site.instagramUrl} target="_blank" rel="noopener noreferrer"><Instagram size={20} aria-hidden="true" /> Instagram <ArrowUpRight size={16} aria-hidden="true" /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} KaKa Pneus & Rodas.</span><span>Feira de Santana · Bahia</span><a href="#inicio">Voltar ao topo ↑</a></div></div></footer>;
}
