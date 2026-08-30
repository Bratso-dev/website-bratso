const productions = [
  {
    name: 'Love Story',
    category: 'Web / Produto',
    image: '/assets/love-story.jpg',
    description: 'Plataforma para casais com identidade visual refinada, experiência emocional e proposta de conversão focada em relacionamento e marca.',
    link: 'https://www.sitelovestory.com',
    buttonLabel: 'Acessar site',
  },
  {
    name: 'Lofi Radio',
    category: 'Web / Streaming',
    image: '/assets/lofi-radio-site.jpg',
    description: 'Projeto único de rádio online com experiência em web e API pública de estações em um mesmo fluxo de produto. O acesso principal está em: https://lofi-frontend-production.up.railway.app/api/stations',
    site: 'https://lofi-frontend-production.up.railway.app/api/stations',
    buttonLabel: 'Acessar projeto',
    github: 'https://github.com/caiodjss/lofi-radio-site',
  },
  {
    name: 'Compra Mensal',
    category: 'Mobile App',
    image: '/assets/logo-bratso.jpg',
    description: 'Aplicativo mobile para auxiliar no controle de compras mensais, organização financeira e planejamento de gastos do dia a dia.',
    buttonLabel: 'App de finanças',
    action: 'alert',
  },
  {
    name: 'Baba Europeu Site',
    category: 'Web / Branding',
    image: '/assets/baba-europeu.png',
    description: 'Projeto de branding e presença digital para marca com identidade forte, humor e presença online marcante.',
    github: 'https://github.com/caiodjss/babaeuropeu',
    site: 'https://caiodjss.github.io/babaeuropeu/src/pages/home.html',
  },
  {
    name: 'Baba Europeu App',
    category: 'Mobile / Produto',
    image: '/assets/logo-babaeuropeu-app.jfif',
    description: 'Aplicativo complementar para o projeto Baba Europeu, com proposta de experiência móvel e presença de marca em canal direto.',
    buttonLabel: 'Em breve',
    action: 'alert',
  },
];

const SectionProductions = () => (
  <section className="section-panel">
    <h2>Projetos em destaque</h2>
    <p className="descricao-producoes">
      Uma seleção de produtos digitais, experiências web e apps com foco em funcionalidade,
      identidade visual e execução pensada para escalar.
    </p>
    <div className="productions-grid">
      {productions.map((project) => (
        <article className="production-card" key={project.name}>
          <span className="project-tag">{project.category}</span>
          <img src={project.image} alt={project.name} className="project-image" />
          <h3>{project.name}</h3>
          <p className="project-description">{project.description}</p>
          <div className="buttons">
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="btn">
                {project.buttonLabel || 'Acesse'}
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn">
                GitHub
              </a>
            )}
            {project.site && (
              <a href={project.site} target="_blank" rel="noreferrer" className="btn">
                {project.buttonLabel || 'Acessar'}
              </a>
            )}
            {project.action === 'alert' && (
              <button type="button" className="btn btn-alert" onClick={() => window.alert('Em Breve')}>
                {project.buttonLabel}
              </button>
            )}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default SectionProductions;
