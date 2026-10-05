import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { navigation, site } from '@/data/site';
import { QuoteLink } from '@/components/ui/quote-link';
import { MobileMenu } from './mobile-menu';

export function Brand({ footer = false }: { footer?: boolean }) {
  return <a href="#inicio" className={`brand ${footer ? 'footer-brand' : ''}`} aria-label="KaKa Pneus & Rodas — início">
    {site.logo ? <Image src={site.logo} alt="KaKa Pneus & Rodas" width={160} height={48} /> : <><span className="brand-name">KaKa<span className="brand-dot">.</span></span><span className="brand-description">PNEUS & RODAS</span></>}
  </a>;
}
export function SiteHeader() {
  return <>
    <div className="topbar"><div className="container"><span><MapPin size={13} aria-hidden="true" /> Feira de Santana, BA</span><a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">Acompanhe {site.instagramHandle}<span aria-hidden="true"> ↗</span></a></div></div>
    <header className="site-header"><div className="container header-inner"><Brand /><nav className="desktop-nav" aria-label="Navegação principal">{navigation.map(item => <a href={item.href} key={item.href}>{item.label}</a>)}</nav><QuoteLink compact className="header-quote" /><MobileMenu /></div></header>
  </>;
}
