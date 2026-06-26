import { notFound } from "next/navigation";
import { FixedWhatsappButton } from "@/components/fixed-whatsapp-button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { VehicleDetail } from "@/components/VehicleDetail";
import { getVehicleBySlug, vehicles } from "@/lib/vehicles";

type VehiclePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({
    slug: vehicle.slug,
  }));
}

export async function generateMetadata({ params }: VehiclePageProps) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    return {
      title: "Veiculo nao encontrado | Breno Automix Manaus",
    };
  }

  return {
    title: `${vehicle.brand} ${vehicle.model} | Breno Automix Manaus`,
    description: vehicle.recommendation,
  };
}

export default async function VehiclePage({ params }: VehiclePageProps) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <VehicleDetail vehicle={vehicle} />
      <FixedWhatsappButton />
      <SiteFooter />
    </>
  );
}
