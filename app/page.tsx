import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <SelectedWork />
      <Services />
      <About />
      <Process />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
