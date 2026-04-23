"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Award, Users, Star, Shield, ArrowRight, Lock } from "lucide-react";

const trustBadges = [
  { icon: Award, label: "+3 Anos no Mercado" },
  { icon: Users, label: "+27 Clientes" },
  { icon: Star, label: "97% Satisfação" },
];

export default function Contact() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    try {
      await fetch("https://formsubmit.co/contato@agenciastocks.com", {
        method: "POST",
        body: formData,
      });
      router.push("/obrigado");
    } catch {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="section-label-stocks">Vamos crescer juntos</span>
          <h2 className="font-barlow font-black uppercase text-[clamp(2.2rem,4.5vw,3.5rem)] mt-3 leading-tight">
            <span className="text-gradient">Entre em</span> Contato
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="hidden lg:flex justify-center">
            <Image
              src="/img/contact.svg"
              alt="Entre em contato com a Stocks TI"
              width={460}
              height={460}
              loading="lazy"
            />
          </div>

          <div className="flex flex-col gap-6">
            {/* WhatsApp CTA */}
            <a
              href="https://api.whatsapp.com/send/?phone=5521971281780&text=Olá!+Vi+o+site+da+Stocks+e+quero+saber+mais+sobre+os+serviços&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="card-stocks p-5 flex items-center gap-4 hover:glow-md group"
            >
              <div className="size-12 rounded-xl bg-green-500/15 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="size-7 fill-green-400">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-xs text-light-white">Resposta em até 2h</p>
                <p className="font-barlow font-black text-lg uppercase text-white group-hover:text-primary transition-colors">
                  Falar com um Especialista
                </p>
              </div>
              <ArrowRight className="size-5 text-primary" />
            </a>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3">
              {trustBadges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="card-stocks p-3 flex flex-col items-center gap-1.5 text-center"
                >
                  <Icon className="size-5 text-primary" />
                  <span className="text-xs text-light-white">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 text-xs text-light-white">
              <div className="h-px flex-1 bg-primary/10" />
              <span>ou preencha o formulário</span>
              <div className="h-px flex-1 bg-primary/10" />
            </div>

            <div className="card-stocks p-4 flex items-start gap-3">
              <Shield className="size-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-light-white">
                Retorno express em até <strong className="text-white">2 horas</strong>. Sem
                compromisso na análise caso não queira fechar negócio logo de cara.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input type="hidden" name="_subject" value="Novo contato pelo site da Stocks TI!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_language" value="pt-BR" />

              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-mono text-light-white uppercase tracking-widest">
                  Seu nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  maxLength={50}
                  placeholder="Escreva seu nome completo"
                  className="bg-primary/5 border border-primary/15 rounded-xl px-4 py-3 text-white placeholder-light-white/50 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-mono text-light-white uppercase tracking-widest">
                  Seu email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={50}
                  placeholder="Escreva um email válido"
                  className="bg-primary/5 border border-primary/15 rounded-xl px-4 py-3 text-white placeholder-light-white/50 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="whatsapp" className="text-xs font-mono text-light-white uppercase tracking-widest">
                  Seu WhatsApp
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  maxLength={15}
                  placeholder="(21) 99999-9999"
                  className="bg-primary/5 border border-primary/15 rounded-xl px-4 py-3 text-white placeholder-light-white/50 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="servico" className="text-xs font-mono text-light-white uppercase tracking-widest">
                  Selecione o Serviço
                </label>
                <select
                  id="servico"
                  name="servico"
                  required
                  className="bg-primary/5 border border-primary/15 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                >
                  <option value="" disabled>Escolha o serviço desejado</option>
                  <option value="Desenvolvimento Web">Desenvolvimento Web</option>
                  <option value="VideoMaker">VideoMaker</option>
                  <option value="Edição de Vídeos">Edição de Vídeos</option>
                  <option value="Design Gráfico">Design Gráfico</option>
                  <option value="Tráfego Pago">Tráfego Pago</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Pacote Completo">Pacote Completo</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary-stocks disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Enviando..." : "Quero Meu Diagnóstico Gratuito"}
              </button>

              <p className="text-xs text-center text-light-white flex items-center justify-center gap-2">
                <Lock className="size-3" /> Seus dados estão seguros. Não enviamos spam.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
