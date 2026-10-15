import { useEffect, useState } from "react";
import Icon from "./Icon.jsx";
import { INSTAGRAM } from "../config.js";

const links = [
  ["#sobre", "Quem sou eu"],
  ["#jornada", "Jornada"],
  ["#formacao", "Formação"],
  ["#instagram", "Instagram"],
  ["#contato", "Contato"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Fecha o menu com a tecla Esc
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header>
      <div className="wrap nav">
        <a href="#topo" className="logo"><b aria-hidden="true">D</b>Dudinha</a>
        <nav aria-label="Principal">
          <ul>
            {links.map(([href, label]) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </nav>
        <a className="btn sm" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
          <Icon name="ig" /> @fisiodudinha
        </a>
        <button
          className="burger"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mnav"
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </div>
      <div id="mnav" className={`mnav${open ? " open" : ""}`} role="navigation" aria-label="Menu mobile">
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="btn" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
          <Icon name="ig" /> Acompanhar no Instagram
        </a>
      </div>
    </header>
  );
}
