import { navItems, contactEmail } from '../data/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <img src="/assets/bratso-logo-dark.png" alt="Bratso" className="footer-logo" />
        <nav>{navItems.map((i) => <a key={i.id} href={`#${i.id}`}>{i.label}</a>)}</nav>
        <div className="social">
          <a href="https://www.instagram.com/caiodjss/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/in/washingtonldamacenac/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${contactEmail}`}>E-mail</a>
        </div>
      </div>
      <p className="copy">© {new Date().getFullYear()} Bratso · bratso.app</p>
    </footer>
  );
}
