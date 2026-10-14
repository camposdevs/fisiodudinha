// ✏️ A Dudinha edita SÓ este arquivo para completar os textos do site.
// Fotos: coloque os arquivos na pasta "public" e escreva o caminho, ex.: "/foto-hero.jpg"

export const photos = {
  hero: "", // foto de jaleco / aula prática
  about: "", // retrato
};

export const profile = {
  college: "[nome da instituição]",
  semester: "[ex.: 3º semestre]",
  graduation: "[ano]",
  quote: "Não é só um jaleco, é a resposta de uma oração.",
};

export const journey = [
  { label: "1º", title: "Primeiro semestre", text: "[Conte como foi a chegada na faculdade, os primeiros desafios e o que mais marcou.]", tags: ["[disciplina]", "[disciplina]"] },
  { label: "2º", title: "Segundo semestre", text: "[Conte as aulas práticas, o que aprendeu e o que mudou na sua rotina.]", tags: ["[disciplina]", "[disciplina]"] },
  { label: "→", next: true, title: "E o que vem pela frente", text: "[Seus planos: estágios, ligas acadêmicas, áreas que quer conhecer melhor.]" },
];

export const feed = [
  { icon: "play", theme: "th1", title: "Um dia na faculdade", text: "Vlogs da rotina: aulas, estudos e aula prática." },
  { icon: "heart", theme: "th2", title: "Aulas práticas", text: "Anatomia, laboratório e os bastidores do aprendizado." },
  { icon: "cam", theme: "th3", title: "Photo dump do semestre", text: "Os melhores momentos de cada fase do curso." },
  { icon: "pen", theme: "th4", title: "Dicas de estudo", text: "[Resumos, cadernos e o jeito que você organiza os estudos.]" },
];

export const values = [
  { icon: "heart", title: "Escutar de verdade", text: "Antes de qualquer técnica, entender a pessoa, a rotina e a história por trás de cada queixa." },
  { icon: "book", title: "Estudar sempre", text: "Aprender com evidências e com os professores, porque cuidar bem exige estudo constante." },
  { icon: "act", title: "Cuidar com propósito", text: "Ajudar as pessoas a recuperar movimento, autonomia e qualidade de vida." },
];

export const notice =
  "Este site tem caráter pessoal e informativo. O conteúdo compartilhado não substitui a avaliação de um fisioterapeuta ou de outro profissional de saúde, e não há oferta de atendimento clínico. Quando eu me formar e tiver registro profissional, as novidades aparecem por aqui.";

// 🎓 Formação e experiências. Apague os itens que ainda não tem.
// Se um grupo ficar sem itens ("items: []"), ele some do site; sem nenhum grupo, a seção inteira some.
export const experiences = [
  { icon: "book", title: "Cursos e certificados", items: ["[Nome do curso, instituição e ano]"] },
  { icon: "user", title: "Ligas acadêmicas", items: ["[Nome da liga e sua função]"] },
  { icon: "act", title: "Estágios e monitorias", items: ["[Local, período e o que você aprendeu]"] },
];
