import { credentials } from "@/content/home";

export function Credentials() {
  return (
    <section className="bg-white py-16">
      <div className="mx-[5%] min-[1920px]:mx-[10%]">
        <p className="font-sans text-[10px] font-medium uppercase tracking-[3px]">
          Credenciais
        </p>
      </div>

      <ul className="mx-[5%] mt-8 grid grid-cols-3 gap-2 min-[480px]:hidden">
        {credentials.map((item) => (
          <Item key={item.label} {...item} />
        ))}
      </ul>

      <ul className="mx-[5%] mt-8 hidden grid-cols-4 gap-6 min-[480px]:grid min-[992px]:hidden">
        {credentials.map((item) => (
          <Item key={item.label} {...item} />
        ))}
      </ul>

      <ul className="mt-8 hidden items-stretch gap-10 overflow-hidden px-[5%] min-[992px]:flex min-[1920px]:px-[10%]">
        {credentials.map((item) => (
          <li key={item.label} className="min-w-[180px] shrink-0">
            <Item {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function Item({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex h-[120px] flex-col items-center justify-center border border-black/10 px-3 text-center">
      <span className="font-serif text-2xl">{value}</span>
      <span className="mt-2 font-sans text-[10px] uppercase leading-4 tracking-[1px] text-[#636768]">
        {label}
      </span>
    </div>
  );
}
