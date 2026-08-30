const stats = [
  { number: '2025', label: 'Ano de criação' },
  { number: '100%', label: 'Foco em qualidade' },
  { number: 'Full Stack', label: 'Desenvolvimento de soluções' },
];

const SectionHome = ({ setActiveSection }) => (
  <section className="section-panel hero-section">
    <div className="hero-panel">
      <div className="hero-copy">
        <h2>Construímos produtos digitais com estratégia, velocidade e acabamento premium.</h2>
        <p>
          Somos uma parceria entre tecnologia, criatividade e execução. Unimos experiência em
          backend, frontend, mobile e produto para transformar ideias em experiências digitais que
          realmente geram valor para negócios e usuários.
        </p>
        <div className="hero-actions">
          <button type="button" className="primary-btn" onClick={() => setActiveSection('contact')}>
            Solicitar proposta
          </button>
          <button type="button" className="secondary-btn" onClick={() => setActiveSection('productions')}>
            Ver projetos
          </button>
        </div>
      </div>

      <div className="hero-stats">
        {stats.map((item) => (
          <div className="stat-card" key={item.label}>
            <strong>{item.number}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="feature-grid">
      <div className="feature-box">
        <span className="feature-tag">Frontend</span>
        <h3>React • TypeScript • Interfaces premium</h3>
        <p>Experiências de alto impacto visual, responsivas e orientadas a conversão.</p>
      </div>
      <div className="feature-box">
        <span className="feature-tag">Mobile</span>
        <h3>React Native • UX de produto</h3>
        <p>Apps com foco em performance, usabilidade e velocidade de execução.</p>
      </div>
      <div className="feature-box">
        <span className="feature-tag">Backend</span>
        <h3>Laravel • Node • APIs REST</h3>
        <p>Infraestrutura sólida, segura e escalável para negócios digitais.</p>
      </div>
    </div>
  </section>
);

export default SectionHome;
