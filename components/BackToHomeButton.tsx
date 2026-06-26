"use client";

type BackToHomeButtonProps = {
  className?: string;
  label?: string;
};

export function BackToHomeButton({
  className = "",
  label = "Voltar ao início",
}: BackToHomeButtonProps) {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (window.location.pathname !== "/") {
      return;
    }

    event.preventDefault();
    document.getElementById("topo")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <a
      href="/#topo"
      onClick={handleClick}
      className={`inline-flex min-h-11 items-center justify-center rounded-md border border-white/15 px-5 text-sm font-semibold text-white transition hover:border-red-500/40 hover:bg-white/[0.06] ${className}`}
    >
      {label}
    </a>
  );
}
