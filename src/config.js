// Lê as variáveis do arquivo .env (local) ou do painel da Netlify (online).
const onlyDigits = (v = "") => String(v).replace(/\D/g, "");

export const WHATSAPP = onlyDigits(import.meta.env.VITE_WHATSAPP);
export const INSTAGRAM = import.meta.env.VITE_INSTAGRAM || "https://instagram.com/fisiodudinha";
const MESSAGE =
  import.meta.env.VITE_WHATSAPP_MESSAGE || "Oi, Dudinha! Vim pelo seu site e queria trocar uma ideia.";

// Sem VITE_WHATSAPP definido, o botão não aparece (evita publicar um número falso)
export const whatsappLink = WHATSAPP ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MESSAGE)}` : null;
