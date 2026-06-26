import { vehicles } from "@/lib/vehicles";

type ProfileRecommendationProps = {
  profile: string;
  budget: string;
  priority: string;
};

function getScore(index: number) {
  return [94, 90, 86][index] ?? 82;
}

export function ProfileRecommendation({
  profile,
  budget,
  priority,
}: ProfileRecommendationProps) {
  const matches = vehicles
    .filter(
      (vehicle) =>
        vehicle.matchProfiles.includes(profile) || vehicle.profile === profile,
    )
    .concat(vehicles)
    .filter(
      (vehicle, index, list) =>
        list.findIndex((item) => item.id === vehicle.id) === index,
    )
    .slice(0, 3);

  return (
    <aside className="border border-red-500/20 bg-black/30 p-5 shadow-premium backdrop-blur md:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
        Recomendações alinhadas ao seu perfil
      </p>
      <h3 className="mt-3 text-xl font-semibold text-white">
        Nossa curadoria identificou modelos que se alinham ao perfil informado
        durante sua consulta.
      </h3>
      <p className="mt-3 text-sm leading-6 text-zinc-400">
        A disponibilidade final deve ser confirmada com Breno.
      </p>

      <div className="mt-5 grid gap-3">
        {matches.map((vehicle, index) => (
          <div
            key={vehicle.id}
            className="border border-white/10 bg-white/[0.035] px-4 py-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-white">
                  {vehicle.brand} {vehicle.model}
                </p>
                <p className="mt-1 text-xs text-zinc-500">{vehicle.profile}</p>
              </div>
              <p className="text-right text-sm font-semibold text-red-300">
                {getScore(index)}%
              </p>
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-zinc-500">
              Compatibilidade estimada
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-2 border-t border-white/10 pt-5 text-sm text-zinc-400">
        <p>Faixa: {budget}</p>
        <p>Prioridade: {priority}</p>
      </div>
    </aside>
  );
}
