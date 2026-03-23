import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ThreePillars } from "@/components/three-pillars";
import { FooterCTA, Footer } from "@/components/footer-cta";

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ThreePillars />
      <FooterCTA />
      <Footer />
    </main>
  );
}
