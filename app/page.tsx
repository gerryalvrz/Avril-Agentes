import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TestimonialsWall } from "@/components/testimonials-wall";
import { TrustBar } from "@/components/trust-bar";
import { FeatureMatrix } from "@/components/feature-matrix";
import { UseCases } from "@/components/use-cases";
import { HowItWorks } from "@/components/how-it-works";
import { AgentShowcase } from "@/components/agent-showcase";
import { DeploymentModels } from "@/components/deployment-models";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
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
        <TestimonialsWall />
        <TrustBar />
      </SectionChapter>
      <SectionChapter variant="dark">
        <FeatureMatrix />
        <UseCases />
      </SectionChapter>
      <SectionChapter variant="light">
        <HowItWorks />
      </SectionChapter>
      <SectionChapter variant="dark">
        <AgentShowcase />
      </SectionChapter>
      <SectionChapter variant="light">
        <DeploymentModels chapterSurface="light" />
      </SectionChapter>
      <SectionChapter variant="dark">
        <Pricing />
      </SectionChapter>
      <SectionChapter variant="light">
        <FAQ chapterSurface="light" />
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
