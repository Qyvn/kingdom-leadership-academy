import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/paths";

const pillars = [
  {
    title: "Leadership Education",
    copy: "Practical teaching that builds self-leadership and equips people to lead with clarity and conviction.",
  },
  {
    title: "Coaching",
    copy: "One-to-one and group coaching that helps emerging leaders grow with accountability and purpose.",
  },
  {
    title: "Training",
    copy: "Workshops and programmes designed to develop excellence, integrity and entrepreneurial thinking.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[78vh] overflow-hidden bg-kla-charcoal text-white">
        <Image
          src={assetPath("/brand/hero-building.jpg")}
          alt=""
          fill
          priority
          className="object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-kla-charcoal via-kla-charcoal/90 to-kla-charcoal/35" />
        <div
          className="animate-slash absolute inset-y-0 right-0 w-[42%] bg-kla-red/85 max-md:hidden"
          aria-hidden
        />
        <div
          className="animate-slash absolute inset-y-0 right-[18%] w-[10%] bg-white/15 max-md:hidden"
          style={{ animationDelay: "0.28s" }}
          aria-hidden
        />

        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-5 py-20 md:px-8">
          <h1 className="animate-fade-up max-w-xl text-5xl font-bold tracking-tight uppercase md:text-6xl lg:text-7xl">
            <span className="block text-white">Kingdom</span>
            <span className="mt-1 block text-kla-red">Leadership Academy</span>
          </h1>
          <p className="animate-fade-up-delay mt-5 max-w-lg text-lg italic text-white/85 md:text-xl">
            Rule Dominate Subdue
          </p>
          <p className="animate-fade-up-delay-2 mt-4 max-w-md text-sm leading-relaxed text-white/70 md:text-base">
            Grooming young men and women to become the global leaders they were born to be.
          </p>
          <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap gap-3">
            <Link
              href="/programs"
              className="bg-kla-red px-6 py-3.5 text-xs font-semibold tracking-[0.18em] text-white uppercase transition-colors hover:bg-kla-red-dark"
            >
              View programs
            </Link>
            <Link
              href="/contact"
              className="border border-white/40 px-6 py-3.5 text-xs font-semibold tracking-[0.18em] text-white uppercase transition-colors hover:border-white hover:bg-white/10"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-kla-red uppercase">Our purpose</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-kla-charcoal uppercase md:text-4xl">
            Mission & vision
          </h2>
          <p className="mt-4 text-base leading-relaxed text-kla-muted">
            We exist to raise leaders who apply biblical Kingdom principles with excellence,
            integrity and courage.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="border-l-4 border-kla-red bg-kla-mist px-6 py-7">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-kla-red uppercase">Mission</h3>
            <p className="mt-3 text-lg leading-relaxed text-kla-charcoal">
              To be the most sought after leadership education, coaching and training firm.
            </p>
          </article>
          <article className="border-l-4 border-kla-charcoal bg-kla-mist px-6 py-7">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-kla-charcoal uppercase">
              Vision
            </h3>
            <p className="mt-3 text-lg leading-relaxed text-kla-charcoal">
              To groom young men and women to be the global leaders they were born to be, using
              tried and tested biblical Kingdom principles.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-kla-mist">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.22em] text-kla-red uppercase">What we offer</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-kla-charcoal uppercase md:text-4xl">
              Three pathways to growth
            </h2>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <article key={pillar.title} className="border-t-2 border-kla-red pt-5">
                <p className="text-xs font-semibold tracking-[0.18em] text-kla-muted uppercase">
                  0{index + 1}
                </p>
                <h3 className="mt-2 text-xl font-bold text-kla-charcoal">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-kla-muted">{pillar.copy}</p>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/programs"
              className="inline-flex bg-kla-charcoal px-6 py-3.5 text-xs font-semibold tracking-[0.18em] text-white uppercase transition-colors hover:bg-kla-ink"
            >
              Explore programs
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-kla-charcoal text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center md:px-8 md:py-20">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight uppercase md:text-4xl">
              Ready to lead with purpose?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Speak with Kingdom Leadership Academy about education, coaching or training for
              yourself, your team or your community.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-kla-red px-6 py-3.5 text-xs font-semibold tracking-[0.18em] text-white uppercase transition-colors hover:bg-kla-red-dark"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
