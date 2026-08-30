const serviceList = [
  {
    title: 'Consultoria em Tecnologia da Informação',
    items: [
      'Planejamento estratégico de TI',
      'Auditoria e análise de sistemas',
      'Gestão de infraestrutura de TI',
      'Consultoria em segurança digital',
      'Assessoria para adoção de novas tecnologias',
    ],
  },
  {
    title: 'Desenvolvimento de Software Sob Medida',
    items: [
      'Desenvolvimento de sistemas web e mobile',
      'Criação de plataformas corporativas e ERPs',
      'Integração de sistemas e APIs',
      'Customização de ferramentas existentes',
      'Desenvolvimento de soluções baseadas em nuvem',
    ],
  },
  {
    title: 'Suporte Técnico Especializado',
    items: [
      'Suporte 24/7 para sistemas críticos',
      'Manutenção preventiva e corretiva',
      'Suporte remoto e presencial',
      'Gestão de servidores e rede corporativa',
      'Atendimento personalizado para empresas de todos os portes',
    ],
  },
  {
    title: 'Aplicativos Mobile e Web',
    items: [
      'Desenvolvimento de apps nativos e híbridos',
      'Criação de interfaces responsivas para web',
      'Foco em usabilidade e experiência do usuário (UX/UI)',
      'Desenvolvimento de sistemas de gerenciamento de conteúdo (CMS)',
      'Criação de lojas virtuais e e-commerce',
    ],
  },
  {
    title: 'Otimização de Processos Empresariais',
    items: [
      'Automação de processos e tarefas repetitivas',
      'Consultoria em ERP e CRM',
      'Gestão de projetos e melhoria contínua',
      'Consultoria para redução de custos operacionais',
      'Implementação de ferramentas de monitoramento e análise de desempenho',
    ],
  },
  {
    title: 'Marketing Digital e Estratégias de Crescimento',
    items: [
      'Consultoria em marketing digital e social media',
      'Gestão de campanhas de anúncios pagos',
      'Otimização para motores de busca (SEO)',
      'Criação de conteúdo digital e estratégias de branding',
      'Análise de dados e relatórios de performance',
    ],
  },
  {
    title: 'Gestão de Dados e Inteligência Artificial',
    items: [
      'Desenvolvimento de soluções para análise de dados',
      'Implementação de IA e Machine Learning em processos empresariais',
      'Automação de análises e relatórios',
      'Criação de dashboards personalizados',
      'Consultoria em Big Data e armazenamento de dados',
    ],
  },
  {
    title: 'Treinamentos e Capacitação',
    items: [
      'Treinamentos em ferramentas de TI e software',
      'Capacitação em segurança digital',
      'Desenvolvimento de cursos internos para colaboradores',
      'Workshops sobre boas práticas de desenvolvimento de software',
      'Consultoria para adoção de novas tecnologias no ambiente corporativo',
    ],
  },
];

const SectionServices = () => (
  <section className="section-panel">
    <div className="section-intro">
      <span className="eyebrow">Soluções digitais</span>
      <h2>Serviços pensados para crescimento real</h2>
      <p>
        Desenvolvemos produtos e sistemas que conectam estratégia, tecnologia e experiência de
        usuário para impulsionar negócios com clareza e execução.
      </p>
    </div>

    <div className="service-grid">
      {serviceList.map((service, index) => (
        <article className="service-card" key={service.title}>
          <span className="service-number">0{index + 1}</span>
          <h3>{service.title}</h3>
          <ul>
            {service.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);

export default SectionServices;
