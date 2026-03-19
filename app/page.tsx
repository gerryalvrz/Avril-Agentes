import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { UseCases } from "@/components/use-cases";
import { HowItWorks } from "@/components/how-it-works";
import { AgentShowcase } from "@/components/agent-showcase";
import { DeploymentModels } from "@/components/deployment-models";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { FooterCTA, Footer } from "@/components/footer-cta";

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustBar />
      <UseCases />
      <HowItWorks />
      <AgentShowcase />
      <DeploymentModels />
      <Pricing />
      <FAQ />
      <FooterCTA />
      <Footer />
    </main>
  );
}
