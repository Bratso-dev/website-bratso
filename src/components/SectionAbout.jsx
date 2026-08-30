const team = [
  {
    name: 'Washington Conceição',
    role: 'Software Engineer • React • React Native • TypeScript • Node',
    image: '/assets/washington.jpg',
    text: 'Engenheiro de software focado em frontend, mobile, product engineering e desenvolvimento de experiências digitais com alto nível de performance e qualidade.',
  },
  {
    name: 'Caio de Jesus',
    role: 'Backend Developer • Laravel • Node.js • APIs REST',
    image: '/assets/caio.png',
    text: 'Profissional de tecnologia com atuação em backend, APIs, autenticação, integrações, troubleshooting e desenvolvimento de soluções escaláveis.',
  },
  {
    name: 'Bratso Studio',
    role: 'Parceria estratégica de produto e tecnologia',
    image: '/assets/logo-bratso.png',
    text: 'A união de duas visões complementares: produto, experiência, tecnologia e execução para transformar negócios e produtos digitais.',
  },
];

const SectionAbout = () => (
  <section className="section-panel">
    <h2>Sobre nós</h2>
    <p className="descricao-sobre">
      Uma parceria estratégica formada por pessoas apaixonadas por tecnologia, produto e execução.
      O foco está em criar soluções digitais modernas, inteligentes e orientadas a resultados.
    </p>
    <div className="sobre-nos">
      {team.map((person) => (
        <div className="card-integrante" key={person.name}>
          <img src={person.image} alt={person.name} />
          <h3>{person.name}</h3>
          <p className="mini-role">{person.role}</p>
          <p>{person.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default SectionAbout;
