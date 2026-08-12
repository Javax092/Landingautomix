import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050505] px-5 py-20 text-center">
      <div className="max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
          Breno Automix
        </p>
        <h1 className="mt-5 text-3xl font-semibold text-white md:text-5xl">
          Esta página não está mais disponível.
        </h1>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/veiculos"
            className="premium-button inline-flex min-h-12 items-center justify-center rounded-sm px-6 text-sm font-semibold text-white"
          >
            Ver veículos
          </Link>
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/15 px-6 text-sm font-semibold text-white transition hover:border-red-500/40 hover:bg-white/[0.06]"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </main>
  );
}
