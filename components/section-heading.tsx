type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      {eyebrow ? (
        <p className="reveal-on-scroll mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-glow">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="reveal-on-scroll stagger-1 font-[var(--font-playfair)] text-3xl font-semibold leading-tight text-platinum md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="reveal-on-scroll stagger-2 mt-4 text-base leading-7 text-smoke md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
