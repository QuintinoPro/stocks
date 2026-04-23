"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Sobre" },
  { href: "#porque", label: "Por que a Stocks" },
  { href: "#services", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#contact", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-stocks-black/90 backdrop-blur-md border-b border-primary/10 py-3"
          : "py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <Image src="/img/logo.png" alt="Stocks" width={32} height={32} />
          <span className="font-barlow font-black text-xl tracking-widest text-white">
            STOCKS
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-light-white hover:text-primary transition-colors duration-200 font-medium"
            >
              {label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden md:inline-flex btn-primary-stocks text-sm py-2.5 px-6">
          Diagnóstico Gratuito
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-stocks-black/95 backdrop-blur-md border-t border-primary/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-light-white hover:text-primary transition-colors py-1"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn-primary-stocks text-sm mt-2"
          >
            Diagnóstico Gratuito
          </a>
        </div>
      )}
    </header>
  );
}
