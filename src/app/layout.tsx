import type { Metadata } from "next";
import { Nunito, Barlow_Condensed, Space_Mono } from "next/font/google";
import "./globals.css";
import { GradientBackground } from "@/components/ui/paper-design-shader-background";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agência Stocks | Posicionamos Empresas na Internet",
  description:
    "Agência Stocks — Posicionamos pequenos negócios na internet com estratégia personalizada, equipe completa e resultado real. Social Media, Tráfego Pago, Design e mais.",
  openGraph: {
    type: "website",
    url: "https://stocksit.com.br/",
    title: "Agência Stocks — Posicionamos Empresas na Internet",
    description:
      "Transformamos pequenos negócios em grandes marcas digitais com estratégia personalizada, equipe completa e resultado que aparece no faturamento.",
    images: [{ url: "https://stocksit.com.br/img/logo%20transparente.png" }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://stocksit.com.br/" },
  icons: { icon: "/img/favicon.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${nunito.variable} ${barlowCondensed.variable} ${spaceMono.variable}`}
    >
      <head>
        <meta name="theme-color" content="#F5A623" />
      </head>
      <body>
        <GradientBackground />
        {children}
      </body>
    </html>
  );
}
