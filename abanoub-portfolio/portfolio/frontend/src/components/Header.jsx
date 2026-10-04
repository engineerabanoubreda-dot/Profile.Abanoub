import { useState } from 'react';
const links = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Training', '#training'], ['Contact', '#contact']];
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="wrap bar">
        <a href="#top" className="brand">Abanoub Reda</a>
        <button className="menu-btn" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
        <nav id="nav" className={open ? 'open' : ''} aria-label="Main">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
      </div>
    </header>
  );
}
