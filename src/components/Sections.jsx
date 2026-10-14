import Icon from "./Icon.jsx";
import { INSTAGRAM, whatsappLink } from "../config.js";
import { photos, profile, journey, experiences, feed, values, notice } from "../data/content.js";

const ext = { target: "_blank", rel: "noopener noreferrer" };

function Photo({ src, alt, label }) {
  return (
    <div className="photo" role={src ? undefined : "img"} aria-label={src ? undefined : alt}>
      {src ? (
        <img src={src} alt={alt} />
      ) : (
        <div><Icon name="user" /><small>{label}</small></div>
      )}
    </div>
  );
}

function Head({ eyebrow, title, lead }) {
  return (
    <div className="head c rv">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap g">
        <div className="rv">
          <span className="pill"><Icon name="heart" filled /> Estudante de Fisioterapia</span>
          <h1>Oi, eu sou a <em>Dudinha</em>. Estou aprendendo a cuidar de gente.</h1>
          <p className="lead">
            Compartilho minha rotina, meus estudos e os aprendizados da faculdade enquanto me preparo
            para ser uma fisioterapeuta que escuta, cuida e faz a diferença.
          </p>
          <div className="actions">
            <a className="btn lg" href={INSTAGRAM} {...ext}><Icon name="ig" /> Acompanhar no Instagram</a>
            <a className="btn lg ghost" href="#jornada">Ver minha jornada</a>
          </div>
        </div>
        <div className="visual rv">
          <Photo src={photos.hero} alt="Dudinha de jaleco na aula prática" label="Foto da Dudinha de jaleco" />
          <div className="float f1"><i><Icon name="book" /></i><div>Sempre aprendendo<small>Rotina e aprendizados</small></div></div>
          <div className="float f2"><i><Icon name="heart" /></i><div>Futura fisioterapeuta<small>Cuidado com propósito</small></div></div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  const facts = [
    ["Curso", "Fisioterapia"],
    ["Faculdade", profile.college],
    ["Semestre atual", profile.semester],
    ["Previsão de formatura", profile.graduation],
  ];
  return (
    <section id="sobre" className="alt">
      <div className="wrap about">
        <div className="rv"><Photo src={photos.about} alt="Retrato da Dudinha" label="Retrato da Dudinha" /></div>
        <div className="rv">
          <span className="eyebrow">Quem sou eu</span>
          <h2>Apaixonada pela área da saúde</h2>
          <p>Sou a Eduarda, mas pode me chamar de Dudinha. Escolhi a fisioterapia por vontade de ajudar as pessoas e por acreditar que cuidar de alguém começa com escuta, estudo e muito carinho.</p>
          <p>Aqui eu conto como é a vida de quem está construindo esse caminho: as aulas, os desafios, as conquistas e tudo o que estou descobrindo pelo meio.</p>
          <div className="quote">“{profile.quote}”</div>
          <ul className="facts">
            {facts.map(([k, v]) => (<li key={k}><b>{k}</b>{v}</li>))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section id="jornada">
      <div className="wrap">
        <Head eyebrow="Minha jornada" title="Semestre a semestre" lead="Cada etapa deixa uma lição nova. Esse é o meu caminho até a formatura." />
        <div className="tl">
          {journey.map((s) => (
            <div className="it rv" key={s.title}>
              <div className={`dot${s.next ? " next" : ""}`}>{s.label}</div>
              <div className="card">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                {s.tags && <div className="tags">{s.tags.map((t, i) => (<span key={i}>{t}</span>))}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Feed() {
  return (
    <section id="instagram">
      <div className="wrap">
        <Head eyebrow="No meu Instagram" title="Rotina real de quem estuda fisioterapia" lead="Sem filtro demais e com muita vontade de aprender junto com você." />
        <div className="grid g4 feed">
          {feed.map((f) => (
            <div className="card rv" key={f.title}>
              <div className={`th ${f.theme}`}><Icon name={f.icon} /></div>
              <div className="b"><h3>{f.title}</h3><p>{f.text}</p></div>
            </div>
          ))}
        </div>
        <div className="actions rv" style={{ justifyContent: "center", marginTop: 44 }}>
          <a className="btn lg" href={INSTAGRAM} {...ext}><Icon name="ig" /> Seguir @fisiodudinha</a>
        </div>
      </div>
    </section>
  );
}

export function Values() {
  return (
    <section id="valores" className="alt">
      <div className="wrap">
        <Head eyebrow="O que me move" title="A profissional que quero ser" />
        <div className="grid g3">
          {values.map((v) => (
            <div className="card rv" key={v.title}>
              <div className="ico"><Icon name={v.icon} /></div>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contato">
      <div className="wrap">
        <div className="contact rv">
          <h2>Vamos trocar uma ideia?</h2>
          <p>Quer falar sobre faculdade, estudos ou fisioterapia? Me chama no Instagram ou no WhatsApp.</p>
          <div className="actions">
            <a className="btn lg" href={whatsappLink} {...ext}><Icon name="wa" filled /> Chamar no WhatsApp</a>
            <a className="btn lg ghost" href={INSTAGRAM} {...ext}><Icon name="ig" /> Instagram</a>
          </div>
        </div>
        <p className="note rv">{notice}</p>
      </div>
    </section>
  );
}

export function Experience() {
  const groups = experiences.filter((g) => g.items.length > 0);
  if (!groups.length) return null;
  return (
    <section id="formacao" className="alt">
      <div className="wrap">
        <Head eyebrow="Formação e experiências" title="O que estou construindo além da sala de aula" lead="Cursos, ligas, estágios e monitorias que fazem parte do meu caminho." />
        <div className="grid g3">
          {groups.map((g) => (
            <div className="card rv" key={g.title}>
              <div className="ico"><Icon name={g.icon} /></div>
              <h3>{g.title}</h3>
              <ul className="xp">{g.items.map((it, i) => (<li key={i}>{it}</li>))}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
