export const mainNav = [
  { label: "A Ubari", href: "/a-ubari" },
  {
    label: "Atendimentos",
    href: "/atendimentos/adultos",
    children: [
      { label: "Terapia para Adultos", href: "/atendimentos/adultos" },
      { label: "Infantil & Família", href: "/atendimentos/infantil-e-familia" },
      { label: "Online (Brasil e Exterior)", href: "/atendimentos/online" },
    ],
  },
  { label: "Espaço", href: "/espaco" },
  { label: "Blog", href: "/blog" },
] as const;

export const secondaryNav = [
  { label: "Terapia para Adultos", href: "/atendimentos/adultos" },
  { label: "Infantil & Família", href: "/atendimentos/infantil-e-familia" },
  { label: "Online (Brasil e Exterior)", href: "/atendimentos/online" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Nossa história", href: "/a-ubari" },
  { label: "Perguntas frequentes", href: "/#faq" },
  { label: "Contato", href: "/contato" },
  { label: "Trabalhe conosco", href: "/contato#trabalhe-conosco" },
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
] as const;

export const footerNav = {
  instituicao: [
    { label: "A Ubari", href: "/a-ubari" },
    { label: "O Espaço", href: "/espaco" },
    { label: "Blog", href: "/blog" },
  ],
  atendimentos: [
    { label: "Adultos", href: "/atendimentos/adultos" },
    { label: "Infantil & Família", href: "/atendimentos/infantil-e-familia" },
    { label: "Online", href: "/atendimentos/online" },
    { label: "Agendar sessão", href: "/agendar" },
  ],
  suporte: [
    { label: "Contato", href: "/contato" },
    { label: "FAQ", href: "/#faq" },
    { label: "Política de Privacidade", href: "/politica-de-privacidade" },
  ],
} as const;
