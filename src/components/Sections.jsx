import { values, services, steps, products, projects } from '../data/content';

const Hero = () => (
  <section id="inicio" className="hero">
    <div className="container hero-inner">
      <span className="eyebrow">Estúdio de produtos digitais</span>
      <h1>Tiramos ideias do papel e colocamos <span className="grad">apps e sites no ar</span>.</h1>
      <p className="lead">A Bratso cria aplicativos, sites e sistemas sob medida, e também desenvolve produtos próprios que resolvem problemas do dia a dia.</p>
      <div className="actions">
        <a href="#contato" className="btn btn-primary">Solicitar proposta</a>
        <a href="#produtos" className="btn btn-ghost">Conhecer produtos</a>
      </div>
    </div>
  </section>
);

const WhoWeAre = () => (
  <section id="quem-somos" className="section">
    <div className="container split">
      <div>
        <span className="eyebrow">Quem somos</span>
        <h2>Um time pequeno, com cabeça de produto.</h2>
        <p>A Bratso nasceu em 2025 da parceria entre dois desenvolvedores que gostam de construir coisas úteis. Juntamos frontend, mobile, backend e visão de produto para entregar software completo, do protótipo ao lançamento.</p>
        <p>Trabalhamos para clientes e também lançamos nossos próprios produtos, e é isso que nos faz pensar como dono quando o projeto é seu.</p>
      </div>
      <div className="values">
        {values.map((v) => (
          <div className="card value" key={v.title}><h3>{v.title}</h3><p>{v.text}</p></div>
        ))}
      </div>
    </div>
  </section>
);

const WhatWeDo = () => (
  <section id="o-que-fazemos" className="section alt">
    <div className="container">
      <div className="intro">
        <span className="eyebrow">O que fazemos</span>
        <h2>Do primeiro esboço ao produto em produção.</h2>
      </div>
      <div className="grid-3">
        {services.map((s) => (
          <article className="card service" key={s.title}>
            <span className="icon" aria-hidden>{s.icon}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </article>
        ))}
      </div>
      <h3 className="sub">Como trabalhamos</h3>
      <ol className="steps">
        {steps.map((s, i) => (
          <li key={s.title}><span>{String(i + 1).padStart(2, '0')}</span><strong>{s.title}</strong><p>{s.text}</p></li>
        ))}
      </ol>
    </div>
  </section>
);

const Products = () => (
  <section id="produtos" className="section">
    <div className="container">
      <div className="intro">
        <span className="eyebrow">Nossos produtos</span>
        <h2>Produtos Bratso</h2>
        <p>Apps e sistemas que criamos e mantemos.</p>
      </div>
      <div className="grid-3">
        {products.map((p) => (
          <article className="card product" key={p.name}>
            <div className="thumb logo-thumb"><img src={p.image} alt={p.name} /></div>
            <div className="meta"><span className="tag">{p.category}</span><span className="status">{p.status}</span></div>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
          </article>
        ))}
      </div>
      <div className="intro intro-tight">
        <h2>Projetos entregues</h2>
        <p>Alguns trabalhos que já estão no ar.</p>
      </div>
      <div className="grid-3">
        {projects.map((p) => (
          <article className="card product" key={p.name}>
            <div className="thumb"><img src={p.image} alt={p.name} /></div>
            <span className="tag">{p.category}</span>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <div className="links">
              {p.links.map((l) => <a key={l.href} href={l.href} target="_blank" rel="noreferrer">{l.label} →</a>)}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default { Hero, WhoWeAre, WhatWeDo, Products };
