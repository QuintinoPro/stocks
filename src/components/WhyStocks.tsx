import { Check, X, Minus, Star } from "lucide-react";

type Icon = "check" | "x" | "minus";

interface ComparisonRow {
  icon: Icon;
  label: string;
}

const columns = [
  {
    title: "Freelancer",
    highlight: false,
    rows: [
      { icon: "x", label: "Equipe completa" },
      { icon: "x", label: "Estratégia integrada" },
      { icon: "minus", label: "Prazo contratual" },
      { icon: "minus", label: "Preço acessível" },
      { icon: "x", label: "Atendimento dedicado" },
      { icon: "x", label: "Resultado escalável" },
    ] as ComparisonRow[],
  },
  {
    title: "Stocks ✓",
    highlight: true,
    rows: [
      { icon: "check", label: "Equipe multidisciplinar" },
      { icon: "check", label: "Estratégia personalizada" },
      { icon: "check", label: "Sem fidelidade forçada" },
      { icon: "check", label: "Preço para PME" },
      { icon: "check", label: "Acesso direto à equipe" },
      { icon: "check", label: "Resultado mensurável" },
    ] as ComparisonRow[],
  },
  {
    title: "Grande Agência",
    highlight: false,
    rows: [
      { icon: "check", label: "Equipe completa" },
      { icon: "check", label: "Estratégia integrada" },
      { icon: "x", label: "Contrato longo" },
      { icon: "x", label: "Preço proibitivo" },
      { icon: "x", label: "Atendimento impessoal" },
      { icon: "minus", label: "Resultado escalável" },
    ] as ComparisonRow[],
  },
];

function RowIcon({ type }: { type: Icon }) {
  if (type === "check") return <Check className="size-4 text-primary shrink-0" />;
  if (type === "x") return <X className="size-4 text-destructive shrink-0" />;
  return <Minus className="size-4 text-light-white shrink-0" />;
}

export default function WhyStocks() {
  return (
    <section id="porque" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-label-stocks">Nosso Diferencial</span>
          <h2 className="font-barlow font-black uppercase text-[clamp(2.2rem,4.5vw,3.5rem)] mt-3 leading-tight">
            Por que a <span className="text-gradient">Stocks?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {columns.map((col) => (
            <div
              key={col.title}
              className={`relative card-stocks p-8 flex flex-col gap-5 ${
                col.highlight ? "border-primary/60 glow-sm md:scale-105 md:-mt-4 md:mb-4 z-10" : ""
              }`}
            >
              {col.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gradient-to-r from-primary to-secondary-brand text-stocks-black text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full flex items-center gap-1.5">
                  <Star className="size-3 fill-current" /> Melhor escolha
                </div>
              )}
              <h3
                className={`font-barlow font-black text-2xl uppercase ${
                  col.highlight ? "text-gradient" : "text-white"
                }`}
              >
                {col.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.rows.map(({ icon, label }) => (
                  <li key={label} className="flex items-center gap-3 text-sm text-light-white">
                    <RowIcon type={icon} />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
