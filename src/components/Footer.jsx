const Footer = ({ setActiveSection }) => (
  <footer>
    <div id="lista-footer">
      <button type="button" className="footer-link" onClick={() => setActiveSection('about')}>
        Conheça a equipe
      </button>
    </div>

    <div className="footer-content">
      <div className="social-links">
        <a href="https://www.instagram.com/caiodjss/" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href="https://www.linkedin.com/in/washingtonldamacenac/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="mailto:cdj@outlook.com.br" target="_blank" rel="noreferrer">
          Contato
        </a>
      </div>
      <p>
        &copy; 2025 <strong>Bratso 💚</strong>
      </p>
    </div>
    <img id="balls" src="/assets/balls.svg" alt="Bolinhas decorativas no canto direito inferior" />
  </footer>
);

export default Footer;
