'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigation } from '@/data/site';

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  return <div className="mobile-menu">
    <button type="button" className="menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
      {open ? <X size={24} /> : <Menu size={24} />}
    </button>
    {open && <nav id="mobile-navigation" aria-label="Navegação móvel" onKeyDown={event => { if (event.key === 'Escape') { setOpen(false); event.currentTarget.parentElement?.querySelector('button')?.focus(); } }}>
      {navigation.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
    </nav>}
  </div>;
}
