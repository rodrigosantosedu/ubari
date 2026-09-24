/** Layout de landing — sem menu, sem links de saída, sem WhatsApp flutuante */
export default function LpLayout({ children }: { children: React.ReactNode }) {
  return <main id="conteudo-principal">{children}</main>;
}
