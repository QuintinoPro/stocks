"use client";

import { useScroll, useTransform, motion, MotionValue } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { Rocket, Handshake, Star, Zap } from "lucide-react";

interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

const counters = [
  { icon: Rocket, value: "+3 Anos", label: "de experiência" },
  { icon: Handshake, value: "+47", label: "clientes atendidos" },
  { icon: Star, value: "97%", label: "de satisfação" },
];

function HeroSection({ scrollYProgress }: SectionProps) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.82]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -4]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.6]);

  return (
    <motion.section
      id="home"
      style={{ scale, rotate, opacity }}
      className="sticky top-0 h-screen flex items-center overflow-hidden rounded-b-3xl"
    >
      {/* accent grid lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[20%] left-0 right-0 h-px bg-primary/10" />
        <div className="absolute top-[60%] left-0 right-0 h-px bg-primary/10" />
        <div className="absolute left-[15%] top-0 bottom-0 w-px bg-primary/10" />
        <div className="absolute left-[85%] top-0 bottom-0 w-px bg-primary/10" />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <h1 className="font-barlow font-black uppercase leading-none text-[clamp(3.5rem,8vw,7rem)] tracking-tight">
            Posicionamos
            <br />
            <span className="text-gradient">Empresas</span>
            <br />
            na Internet
          </h1>
          <p className="text-light-white text-lg max-w-lg leading-relaxed">
            &ldquo;Transformamos pequenos negócios em grandes marcas digitais, com
            estratégia personalizada, equipe completa e resultado que aparece no
            faturamento.&rdquo;
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary-stocks">
              Quero Ser Posicionado
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=5521971281780&text=Olá!+Vi+o+site+da+Stocks+e+quero+saber+mais+sobre+os+serviços&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-stocks"
            >
              Falar no WhatsApp
            </a>
          </div>
          <p className="text-sm text-light-white flex items-center gap-2">
            <Zap className="size-4 text-primary" />
            Diagnóstico gratuito, sem compromisso, sem enrolação.
          </p>
        </div>

        <div className="hidden lg:flex justify-center items-center">
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/img/logo3d.png"
              alt="Agência Stocks"
              width={420}
              height={420}
              priority
              className="drop-shadow-[0_0_60px_rgba(245,166,35,0.35)]"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function CountersSection({ scrollYProgress }: SectionProps) {
  const scale = useTransform(scrollYProgress, [0, 1], [0.82, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [4, 0]);

  return (
    <motion.section
      id="counters"
      style={{ scale, rotate }}
      className="relative h-screen bg-stocks-light flex items-center justify-center rounded-t-3xl"
    >
      <div className="container mx-auto px-6 text-center">
        <span className="section-label-stocks">Nossa História em Números</span>
        <h2 className="font-barlow font-black uppercase text-[clamp(2.5rem,5vw,4rem)] mt-2 mb-12 leading-tight">
          Resultados que <span className="text-gradient">Falam por Si</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {counters.map(({ icon: Icon, value, label }) => (
            <div key={label} className="card-stocks p-8 flex flex-col items-center gap-3">
              <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Icon className="size-7 text-primary" />
              </div>
              <span className="font-barlow font-black text-5xl text-gradient">{value}</span>
              <span className="text-light-white text-sm uppercase tracking-widest font-mono">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default function HeroScrollAnimation() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative h-[200vh]">
      <HeroSection scrollYProgress={scrollYProgress} />
      <CountersSection scrollYProgress={scrollYProgress} />
    </div>
  );
}
