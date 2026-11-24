import { useState } from 'react';
import { navItems } from '../data/content';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="topo">
      <div className="container topo-inner">
        <a href="#inicio" className="brand"><img src="/assets/bratso-logo.png" alt="Bratso — Soluções em tecnologia" /></a>
        <button className="menu-toggle" aria-label="Abrir menu" onClick={() => setOpen(!open)}>☰</button>
        <nav className={open ? 'nav open' : 'nav'} aria-label="Menu principal">
          {navItems.map((i) => (
            <a key={i.id} href={`#${i.id}`} onClick={() => setOpen(false)}>{i.label}</a>
          ))}
          <a href="#contato" className="btn btn-primary btn-sm" onClick={() => setOpen(false)}>Fale conosco</a>
        </nav>
      </div>
    </header>
  );
}
