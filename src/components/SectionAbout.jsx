import { team } from '../data/content';

export default function SectionAbout() {
  return (
    <section id="equipe" className="section alt">
      <div className="container">
        <div className="intro"><span className="eyebrow">Equipe</span><h2>Quem está por trás da Bratso</h2></div>
        <div className="grid-3 team-grid">
          {team.map((p) => (
            <article className="card person" key={p.name}>
              <img src={p.image} alt={p.name} />
              <div>
                <h3>{p.name}</h3>
                <span className="role">{p.role}</span>
                {p.text && <p>{p.text}</p>}
                <a href={p.link} target="_blank" rel="noreferrer">LinkedIn →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
