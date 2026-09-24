export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  featured?: boolean;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "5-sinais-saude-emocional",
    title:
      "5 sinais de que talvez esteja na hora de olhar mais para sua saúde emocional",
    excerpt:
      "Insônia, irritabilidade, corpo tenso, distanciamento e a sensação de estar no piloto automático. Quando prestar atenção — sem alarme.",
    date: "2025-11-10",
    author: "Equipe Ubari",
    tags: ["saúde emocional", "ansiedade"],
    featured: true,
    content: `
## Você não precisa esperar o limite

Buscar ajuda não significa fraqueza. Significa cuidar de si antes que a exaustão afete ainda mais sua saúde.

### 1. O sono não descansa mais
Dificuldade para dormir, acordar no meio da noite ou acordar cansado(a) — mesmo sem motivo físico aparente.

### 2. Irritabilidade constante
Pequenas coisas pesam mais do que costumavam. A paciência parece ter encolhido.

### 3. O corpo fala
Tensão no peito, dor de cabeça, estômago embrulhado. O corpo costuma avisar antes da mente admitir.

### 4. Distância de quem importa
Cancelar planos, evitar conversas, se isolar. Às vezes a sobrecarga pede silêncio — e o silêncio vira hábito.

### 5. Piloto automático
Dias que passam sem presença real. Trabalhar, cuidar, repetir — sem espaço para si.

Se algum desses sinais ressoa, a Ubari existe para acolher. Sem julgamento, com vínculo contínuo.
`,
  },
  {
    slug: "como-e-a-primeira-sessao",
    title: "Como é a primeira sessão de terapia?",
    excerpt:
      "O que esperar no primeiro encontro: ritmo, sigilo, e por que não precisa chegar com tudo resolvido.",
    date: "2025-10-22",
    author: "Equipe Ubari",
    tags: ["primeira sessão", "terapia"],
    featured: true,
    content: `
## Um encontro para se conhecerem

A primeira sessão não é uma prova. É um espaço para contar o que te trouxe até aqui — no seu tempo.

### O que costuma acontecer
- Apresentação do profissional e do setting (presencial ou online)
- Suas expectativas e o que está vivendo agora
- Explicação sobre frequência, sigilo e como funciona o acompanhamento
- Espaço para dúvidas

### O que não precisa
Não é necessário chegar com um diagnóstico, uma lista completa ou a certeza de que “está pronto(a)”. Basta a disposição de começar.

Na Ubari, a primeira sessão já faz parte do vínculo — o mesmo profissional te acompanha daí em diante.
`,
  },
  {
    slug: "como-escolher-um-psicologo",
    title: "Como escolher um psicólogo: 6 pontos para observar",
    excerpt:
      "CRP, abordagem, ambiente, continuidade, ética e a sensação de acolhimento — um guia sereno.",
    date: "2025-09-15",
    author: "Equipe Ubari",
    tags: ["orientação", "escolha"],
    featured: true,
    content: `
## Escolher com calma

### 1. Registro no CRP
Todo psicólogo deve ter CRP ativo. Peça e confira.

### 2. Abordagem e fit
Não existe “a melhor” abordagem — existe a que faz sentido para você. Pergunte e sinta se a conversa flui.

### 3. Ambiente
O espaço importa. Privacidade, conforto, pontualidade. Na Ubari, o casarão foi pensado para isso.

### 4. Continuidade
Evite clínicas com alta rotatividade. Vínculo terapêutico precisa de tempo e estabilidade.

### 5. Ética
Sem promessas de cura, sem depoimentos de pacientes em marketing, sem pressão.

### 6. Acolhimento
Ao final: você se sentiu ouvido(a)? Isso conta tanto quanto o currículo.
`,
  },
];

export function getAllPosts() {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFeaturedPosts(count = 3) {
  return getAllPosts()
    .filter((p) => p.featured)
    .slice(0, count);
}
