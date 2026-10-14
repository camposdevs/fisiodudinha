import { useEffect } from "react";
import Header from "./components/Header.jsx";
import { Footer, StickyBar } from "./components/Footer.jsx";
import { Hero, About, Journey, Experience, Feed, Values, Contact } from "./components/Sections.jsx";

export default function App() {
  // Animação de entrada ao rolar a página
  useEffect(() => {
    const els = document.querySelectorAll(".rv");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <a className="skip" href="#topo">Pular para o conteúdo</a>
      <Header />
      <main id="topo">
        <Hero />
        <About />
        <Journey />
        <Experience />
        <Feed />
        <Values />
        <Contact />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
