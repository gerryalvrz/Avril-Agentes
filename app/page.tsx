import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ThreePillars } from "@/components/three-pillars";
import { FooterCTA, Footer } from "@/components/footer-cta";
import { SectionChapter } from "@/components/section-chapter";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SectionChapter variant="dark">
        <Hero />
      </SectionChapter>
      <SectionChapter variant="light">
        <ThreePillars />
      </SectionChapter>
      <SectionChapter variant="dark">
        <FooterCTA />
      </SectionChapter>
      <SectionChapter variant="light">
        <Footer />
      </SectionChapter>
    </main>
  );
}
