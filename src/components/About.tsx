import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center">
          <Image
            src="/img/developer-activity.svg"
            alt="Equipe Stocks TI"
            width={480}
            height={480}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-6">
          <span className="section-label-stocks">Quem Somos</span>
          <h2 className="font-barlow font-black uppercase text-[clamp(2rem,4vw,3.2rem)] leading-tight">
            Para quem não tem tempo de aprender marketing, mas não pode dar ao
            luxo de <span className="text-gradient">ignorá-lo.</span>
          </h2>
          <p className="text-light-white leading-relaxed">
            Seu foco deve ser atender clientes e liderar o negócio, não quebrar
            a cabeça virando o &ldquo;faz-tudo&rdquo; do Instagram e Google Ads da sua própria
            empresa.
          </p>
          <p className="text-light-white leading-relaxed">
            Somos o time de marketing que você precisa pelo preço que faz
            sentido: mais estruturados que um freelancer, mais acessíveis que
            uma agência engessada.
          </p>
          <a href="#contact" className="btn-primary-stocks self-start mt-2">
            Quero Meu Diagnóstico Gratuito
          </a>
        </div>
      </div>
    </section>
  );
}
