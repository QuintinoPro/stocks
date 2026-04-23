const steps = [
  {
    number: "01",
    title: "Diagnóstico Gratuito",
    desc: "Conversa rápida para analisarmos sua presença online e mapear as vias mais curtas para o lucro.",
  },
  {
    number: "02",
    title: "Estratégia Personalizada",
    desc: "Definimos juntos os canais certos, o orçamento e as métricas exatas para o seu momento atual.",
  },
  {
    number: "03",
    title: "Execução e Entrega",
    desc: "Nosso time cria, edita e publica de ponta a ponta. Você apenas aprova os materiais finais.",
  },
  {
    number: "04",
    title: "Otimização Contínua",
    desc: "O que funciona é redobrado, o que não funciona é cortado. Crescimento contínuo mês a mês.",
  },
];

export default function Process() {
  return (
    <section id="processo" className="py-24 bg-stocks-light/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-label-stocks">Método Stocks</span>
          <h2 className="font-barlow font-black uppercase text-[clamp(2.2rem,4.5vw,3.5rem)] mt-3 leading-tight">
            Como <span className="text-gradient">Trabalhamos</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {steps.map(({ number, title, desc }) => (
            <div
              key={number}
              className="card-stocks p-10 flex flex-col items-center text-center gap-4 flex-[1_1_22rem] max-w-xs group hover:-translate-y-2 hover:border-primary/50 hover:glow-sm overflow-hidden relative"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
              <span className="font-barlow font-black text-8xl text-gradient leading-none opacity-80">
                {number}
              </span>
              <h3 className="font-barlow font-black text-xl uppercase text-white tracking-wide">{title}</h3>
              <p className="text-light-white text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
