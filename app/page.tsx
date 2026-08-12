import { ConciergeConfigurator } from "@/components/ConciergeConfigurator";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { MatchScoreSection } from "@/components/MatchScoreSection";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { VehicleCatalog } from "@/components/VehicleCatalog";
import { VipLeadForm } from "@/components/VipLeadForm";
import { AboutBreno } from "@/components/AboutBreno";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <SiteHeader />
      <main>
        <Hero />
        <VehicleCatalog />
        <ConciergeConfigurator />
        <MatchScoreSection />
        <AboutBreno />
        <VipLeadForm />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
