import Icon from "./Icon.jsx";
import { INSTAGRAM } from "../config.js";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="logo"><b>D</b>Dudinha</div>
        <p>Estudante de Fisioterapia · <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">@fisiodudinha</a></p>
        <p>© {new Date().getFullYear()} Dudinha. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

// Barra fixa que só aparece no celular
export function StickyBar() {
  return (
    <div className="bar">
      <a className="btn" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
        <Icon name="ig" /> Acompanhar no Instagram
      </a>
    </div>
  );
}
