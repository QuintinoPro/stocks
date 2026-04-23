"use client";

import {
  Hash,
  TrendingUp,
  Palette,
  Scissors,
  Video,
  Code2,
  Bot,
} from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const servicesData = [
  {
    id: 1,
    title: "Social Media",
    date: "Instagram · LinkedIn · TikTok",
    content:
      "Posicionamento profissional que atrai clientes todos os dias, sem você precisar administrar os posts.",
    category: "Conteúdo",
    icon: Hash,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "Tráfego Pago",
    date: "Meta Ads · Google Ads · LinkedIn Ads",
    content:
      "Anúncios inteligentes para quem já busca pelo seu negócio. Menor custo e contatos rápidos.",
    category: "Performance",
    icon: TrendingUp,
    relatedIds: [1, 6],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Design Gráfico",
    date: "Logo · Manual Visual · Criativos",
    content:
      "Sua marca com identidade que transmite autoridade imediata e ajuda a fechar vendas mais fácil.",
    category: "Branding",
    icon: Palette,
    relatedIds: [1, 4],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 4,
    title: "Edição de Vídeos",
    date: "Reels · VSL · Motion",
    content:
      "Reels e vídeos editados de forma dinâmica para reter a atenção nos primeiros segundos decisivos.",
    category: "Vídeo",
    icon: Scissors,
    relatedIds: [3, 5],
    status: "completed" as const,
    energy: 80,
  },
  {
    id: 5,
    title: "VideoMaker",
    date: "Institucional · Depoimentos · Campanhas",
    content:
      "Produção audiovisual impecável que passa total credibilidade sobre seus serviços e produtos.",
    category: "Vídeo",
    icon: Video,
    relatedIds: [4],
    status: "completed" as const,
    energy: 75,
  },
  {
    id: 6,
    title: "Dev Web",
    date: "Landing Page · Site · Conversão",
    content:
      "Sites e landing pages velozes focados estrategicamente em converter visitantes em clientes.",
    category: "Tech",
    icon: Code2,
    relatedIds: [2],
    status: "completed" as const,
    energy: 88,
  },
  {
    id: 7,
    title: "IA & Automação",
    date: "IA · Automação · Processos",
    content:
      "Automatize processos repetitivos do seu negócio com inteligência artificial. Atendimento, qualificação de leads e muito mais.",
    category: "Inovação",
    icon: Bot,
    relatedIds: [1, 2],
    status: "pending" as const,
    energy: 40,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <span className="section-label-stocks">O que fazemos</span>
          <h2 className="font-barlow font-black uppercase text-[clamp(2rem,4vw,3.2rem)] mt-3 leading-tight">
            Não fazemos posts por fazer.
            <br />
            <span className="text-gradient">Fazemos conteúdo que vende.</span>
          </h2>
          <p className="text-light-white text-sm mt-4">
            Clique em um serviço para saber mais
          </p>
        </div>

        <RadialOrbitalTimeline timelineData={servicesData} />
      </div>
    </section>
  );
}
