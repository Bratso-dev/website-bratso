const Header = ({ activeSection, setActiveSection, navItems }) => (
  <header className="topo">
    <div className="topo-inner">
      <div className="brand-wrap">
        <img src="/assets/logo-bratso.png" alt="Logo Bratso" className="imagem-topo" />
        <div className="brand-copy">
          <span className="brand-kicker">Bratso Studio</span>
          <strong>Parceria digital</strong>
        </div>
      </div>

      <nav className="menu-principal" aria-label="Menu principal">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={activeSection === item.id ? 'nav-button active' : 'nav-button'}
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
