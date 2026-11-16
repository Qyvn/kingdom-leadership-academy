type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-kla-charcoal text-white">
      <div
        className="absolute inset-y-0 right-0 w-1/2 bg-kla-red/90 animate-slash max-md:hidden"
        aria-hidden
      />
      <div
        className="absolute inset-y-0 right-[8%] w-[18%] bg-white/10 animate-slash max-md:hidden"
        style={{ animationDelay: "0.35s" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        {eyebrow ? (
          <p className="animate-fade-up text-xs font-semibold tracking-[0.24em] text-kla-gold uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="animate-fade-up-delay mt-3 max-w-2xl text-4xl font-bold tracking-tight uppercase md:text-5xl">
          {title}
        </h1>
        <p className="animate-fade-up-delay-2 mt-4 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
