export const desktopNav = [
  {
    label: "Atendimentos",
    href: "/atendimentos/adultos",
    children: [
      {
        label: "Terapia para adultos",
        description: "Escuta ética, pontualidade e um espaço para desacelerar.",
        href: "/atendimentos/adultos",
      },
      {
        label: "Infantil e família",
        description: "De 3 a 9 anos, com retorno aos pais a cada 4 encontros.",
        href: "/atendimentos/infantil-e-familia",
      },
      {
        label: "Online",
        description: "Em português, no Brasil e no exterior.",
        href: "/atendimentos/online",
      },
    ],
  },
  { label: "O espaço", href: "/espaco" },
  { label: "A Ubari", href: "/a-ubari" },
  { label: "Blog", href: "/blog" },
] as const;

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
  { label: "Como funciona", href: "/#personalizacao" },
  { label: "Nossa história", href: "/a-ubari" },
  { label: "Contato", href: "/#contato" },
  { label: "Trabalhe conosco", href: "/contato#trabalhe-conosco" },
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
] as const;

export const footerNav = {
  mapa: [
    { label: "Home", href: "/" },
    { label: "A Ubari", href: "/a-ubari" },
    { label: "O espaço", href: "/espaco" },
    { label: "Blog", href: "/blog" },
    { label: "Trabalhe conosco", href: "/contato#trabalhe-conosco" },
    { label: "Política de Privacidade", href: "/politica-de-privacidade" },
  ],
  atendimentos: [
    { label: "Adultos", href: "/atendimentos/adultos" },
    { label: "Infantil e família", href: "/atendimentos/infantil-e-familia" },
    { label: "Online", href: "/atendimentos/online" },
    { label: "Agendar sessão", href: "/agendar" },
  ],
} as const;
