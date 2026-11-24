import { useState } from 'react';
import { contactEmail, whatsappUrl } from '../data/content';

export default function SectionContact() {
  const [f, setF] = useState({ nome: '', email: '', mensagem: '' });
  const change = (e) => setF({ ...f, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contato pelo site - ${f.nome}`);
    const body = encodeURIComponent(`${f.mensagem}\n\n${f.nome} <${f.email}>`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };
  return (
    <section id="contato" className="section">
      <div className="container split">
        <div>
          <span className="eyebrow">Contato</span>
          <h2>Tem uma ideia? Vamos conversar.</h2>
          <p>Conte o que você precisa e respondemos com os próximos passos.</p>
          <div className="contact-links">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Chamar no WhatsApp</a>
            <a href={`mailto:${contactEmail}`} className="btn btn-ghost">{contactEmail}</a>
          </div>
        </div>
        <form className="card form" onSubmit={submit}>
          <label>Nome<input name="nome" value={f.nome} onChange={change} required /></label>
          <label>E-mail<input type="email" name="email" value={f.email} onChange={change} required /></label>
          <label>Mensagem<textarea name="mensagem" rows="5" value={f.mensagem} onChange={change} required /></label>
          <button className="btn btn-primary" type="submit">Enviar mensagem</button>
        </form>
      </div>
    </section>
  );
}
