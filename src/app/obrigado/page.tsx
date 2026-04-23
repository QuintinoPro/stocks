import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Obrigado! | Agência Stocks",
  description: "Recebemos sua mensagem. Nossa equipe entrará em contato em até 2 horas.",
};

export default function Obrigado() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="flex flex-col items-center gap-8 max-w-lg">
        <Image src="/img/logo.png" alt="Stocks" width={56} height={56} />

        <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center">
          <CheckCircle className="size-10 text-primary" />
        </div>

        <div>
          <h1 className="font-barlow font-black uppercase text-5xl text-gradient mb-3">
            Mensagem Recebida!
          </h1>
          <p className="text-light-white text-lg leading-relaxed">
            Nossa equipe entrará em contato em até{" "}
            <strong className="text-white">2 horas</strong>. Enquanto isso, siga a
            gente no Instagram{" "}
            <a
              href="https://www.instagram.com/stocks.ti/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              @stocks.ti
            </a>{" "}
            para ver mais do nosso trabalho.
          </p>
        </div>

        <Link
          href="/"
          className="btn-outline-stocks flex items-center gap-2"
        >
          <ArrowLeft className="size-4" />
          Voltar ao site
        </Link>
      </div>
    </main>
  );
}
