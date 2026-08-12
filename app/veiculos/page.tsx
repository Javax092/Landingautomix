import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { VehicleInventory } from "@/components/VehicleInventory";
import { vehicles } from "@/lib/vehicles";

export const metadata: Metadata = {
  title: "Estoque | Breno Automix Manaus",
  description:
    "Estoque selecionado da Breno Automix em Manaus, com veículos premium disponíveis para curadoria e proposta.",
};

export default function VehiclesPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#050505] pt-20">
        <VehicleInventory vehicles={vehicles} />
      </main>
      <SiteFooter />
    </>
  );
}
