import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Kingdom Leadership Academy — our mission, vision and values rooted in biblical Kingdom principles.",
};

const values = [
  "Entrepreneurship is the answer to economic freedom.",
  "Everyone is a leader. The highest form of leadership is self-leadership.",
  "We are all born to dominate the environment around us but not people.",
  "A basic human need is the Kingdom of God. As the kingdom is sought, understood and applied, all other needs get added unto the person.",
  "Family is important to God and also to us. Healthy families lead to a healthy community, and a healthy community leads to a healthy nation.",
  "Excellence and integrity in all we do is a must without compromise.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Who we are"
        description="Kingdom Leadership Academy exists to raise leaders who live by biblical Kingdom principles — with excellence, integrity and purpose."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-kla-red uppercase">
              Our foundation
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-kla-charcoal uppercase">
              Rule · Dominate · Subdue
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-kla-muted">
            <p>
              Our tagline captures a call to responsible leadership: to rule with wisdom, dominate
              challenges — not people — and subdue environments through character, skill and faith.
            </p>
            <p>
              We work with young men and women who want to grow as global leaders, applying tried
              and tested biblical Kingdom principles in business, family, community and personal
              life.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-kla-mist">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <p className="text-xs font-semibold tracking-[0.22em] text-kla-red uppercase">
            Mission & vision
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-kla-charcoal uppercase">
            Why we exist
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="bg-white px-6 py-8 shadow-[0_1px_0_0_var(--kla-line)]">
              <h3 className="text-xs font-semibold tracking-[0.2em] text-kla-red uppercase">
                Mission
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-kla-charcoal">
                To be the most sought after leadership education, coaching and training firm.
              </p>
            </article>
            <article className="bg-white px-6 py-8 shadow-[0_1px_0_0_var(--kla-line)]">
              <h3 className="text-xs font-semibold tracking-[0.2em] text-kla-red uppercase">
                Vision
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-kla-charcoal">
                Kingdom Leadership Academy is to groom young men and women to be the global leaders
                they were born to be, using tried and tested biblical Kingdom principles.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-kla-red uppercase">Our values</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-kla-charcoal uppercase">
            What we stand for
          </h2>
          <p className="mt-4 text-base leading-relaxed text-kla-muted">
            These principles guide every programme, coaching conversation and training session.
          </p>
        </div>

        <ol className="mt-10 divide-y divide-kla-line border-y border-kla-line">
          {values.map((value, index) => (
            <li key={value} className="grid gap-3 py-5 md:grid-cols-[4rem_1fr] md:items-start">
              <span className="text-sm font-semibold tracking-[0.16em] text-kla-red">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-base leading-relaxed text-kla-charcoal md:text-lg">{value}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <Link
            href="/contact"
            className="inline-flex bg-kla-red px-6 py-3.5 text-xs font-semibold tracking-[0.18em] text-white uppercase transition-colors hover:bg-kla-red-dark"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
