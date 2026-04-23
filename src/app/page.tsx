import Header from "@/components/Header";
import HeroScrollAnimation from "@/components/ui/hero-scroll-animation";
import About from "@/components/About";
import WhyStocks from "@/components/WhyStocks";
import Services from "@/components/Services";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroScrollAnimation />
        <About />
        <WhyStocks />
        <Services />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
