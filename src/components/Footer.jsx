import { navItems, contactEmail, whatsappUrl } from '../data/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <img src="/assets/bratso-logo-dark.png" alt="Bratso" className="footer-logo" />
        <nav>{navItems.map((i) => <a key={i.id} href={`#${i.id}`}>{i.label}</a>)}</nav>
        <div className="social">
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
      <p className="copy">© {new Date().getFullYear()} Bratso · bratso.app</p>
    </footer>
  );
}
