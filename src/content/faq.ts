export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: "Como é a primeira sessão?",
    answer:
      "É um encontro para nos conhecermos. Você conta o que te trouxe até aqui, e o profissional explica como funciona o acompanhamento. Sem pressão e sem pressa — no seu ritmo.",
  },
  {
    question: "Qual a frequência das sessões?",
    answer:
      "Em geral, sessões semanais. A frequência pode ser ajustada conforme o momento e o acordo terapêutico com o seu psicólogo de referência.",
  },
  {
    question: "Vocês atendem convênio?",
    answer:
      "Nosso foco é o atendimento particular. Emitimos recibo para que você possa solicitar reembolso junto ao seu plano de saúde, conforme as regras da operadora.",
  },
  {
    question: "Como funciona o online para quem mora fora?",
    answer:
      "Atendemos brasileiros no Brasil e no exterior (EUA, Canadá, Europa e outros). As sessões são em português, com horários compatíveis com o seu fuso, e pagamento simplificado em reais.",
  },
  {
    question: "Qual a idade atendida no infantil?",
    answer:
      "Atendemos crianças de 3 a 9 anos, em ambiente lúdico e seguro, com protagonismo da criança no processo.",
  },
  {
    question: "Como os pais são orientados?",
    answer:
      "A cada 4 encontros com a criança, realizamos um retorno aos pais ou cuidadores para alinhar o acompanhamento e oferecer orientação prática.",
  },
  {
    question: "Há estacionamento?",
    answer:
      "Sim. Contamos com estacionamento fácil para que a chegada seja tranquila — inclusive para quem acompanha.",
  },
];

export const faqShort: FaqItem[] = faq.slice(0, 4);
