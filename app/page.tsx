
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Works from "@/components/works";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#1A213E]">
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Services />
      <FAQ />
      <Footer />
    </main>
  );
}
