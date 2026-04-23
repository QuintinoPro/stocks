"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Preciso ter um orçamento grande para contratar?",
    a: "Não. Montamos escopos flexíveis que fazem sentido tanto para quem está prestes a traçar metas quanto para quem já fatura alto e quer escalar.",
  },
  {
    q: "Quanto custa contratar a Stocks?",
    a: "Serviços recorrentes a partir de R$ 1.500/mês e Branding completo entre R$ 3.000 e 6.000. Tudo formatado sem sustos e multas.",
  },
  {
    q: "Em quanto tempo vejo resultados?",
    a: "No Tráfego Pago, você capta desde a 1ª semana. Estratégias orgânicas (redes, SEO) exigem maturação de 60 a 90 dias.",
  },
  {
    q: "Vocês atendem qual tipo de negócio?",
    a: "Advocacia, tech, clínicas, esportes, infoprodutos e e-commerces. Se o seu foco é autoridade e escala, nós resolvemos.",
  },
  {
    q: "Como funciona o diagnóstico gratuito?",
    a: "Reunião de ~30 min sem compromisso para escanearmos seu posicionamento atual e te entregarmos um mapa de ação.",
  },
  {
    q: "Preciso me envolver no processo?",
    a: "Apenas para aprovar e direcionar pautas rápidas. Toda a pressão de execução e estratégia criativa fica nas costas da nossa equipe.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <span className="section-label-stocks">Dúvidas Frequentes</span>
          <h2 className="font-barlow font-black uppercase text-[clamp(2.2rem,4.5vw,3.5rem)] mt-3 leading-tight">
            Perguntas <span className="text-gradient">&amp; Respostas</span>
          </h2>
        </div>

        <Accordion multiple={false} className="flex flex-col gap-3">
          {faqs.map(({ q, a }, i) => (
            <AccordionItem
              key={q}
              value={i}
              className="card-stocks px-6 border-primary/[0.12] rounded-2xl"
            >
              <AccordionTrigger className="text-left font-semibold text-white py-5 hover:text-primary transition-colors hover:no-underline">
                {q}
              </AccordionTrigger>
              <AccordionContent className="text-light-white leading-relaxed pb-5">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
