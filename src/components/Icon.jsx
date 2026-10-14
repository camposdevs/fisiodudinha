// Usa os ícones definidos no <svg> escondido do index.html
export default function Icon({ name, filled = false }) {
  return (
    <svg className={filled ? "f" : "i"} aria-hidden="true">
      <use href={`#${name}`} />
    </svg>
  );
}
