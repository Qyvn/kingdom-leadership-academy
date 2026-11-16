import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Leadership education, coaching and training programmes from Kingdom Leadership Academy.",
};

const programs = [
  {
    title: "Leadership Education",
    summary:
      "Structured learning that builds biblical Kingdom leadership foundations for personal and professional life.",
    points: [
      "Self-leadership and personal mastery",
      "Kingdom principles for decision-making",
      "Character, excellence and integrity",
    ],
  },
  {
    title: "Coaching",
    summary:
      "Guided conversations that help emerging and established leaders grow with clarity and accountability.",
    points: [
      "One-to-one leadership coaching",
      "Group and peer coaching formats",
      "Practical next steps for growth",
    ],
  },
  {
    title: "Training",
    summary:
      "Focused workshops and training sessions for teams, communities and aspiring entrepreneurs.",
    points: [
      "Entrepreneurial mindset development",
      "Team and community leadership",
      "Applied Kingdom principles in daily work",
    ],
  },
];

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Education, coaching & training"
        description="Simple, professional pathways designed to raise leaders who lead themselves first — then influence environments with wisdom and integrity."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-8">
          {programs.map((program, index) => (
            <article
              key={program.title}
              className="grid gap-6 border border-kla-line bg-white p-6 md:grid-cols-[7rem_1fr_auto] md:items-start md:p-8"
            >
              <p className="text-sm font-semibold tracking-[0.18em] text-kla-red">
                0{index + 1}
              </p>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-kla-charcoal uppercase">
                  {program.title}
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-kla-muted">
                  {program.summary}
                </p>
                <ul className="mt-5 space-y-2">
                  {program.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-kla-charcoal">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-kla-red" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact"
                className="inline-flex h-fit items-center justify-center bg-kla-charcoal px-5 py-3 text-xs font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:bg-kla-ink md:self-center"
              >
                Enquire
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-kla-mist">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.22em] text-kla-red uppercase">
              Who it is for
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-kla-charcoal uppercase">
              Built for emerging leaders
            </h2>
            <p className="mt-4 text-base leading-relaxed text-kla-muted">
              Our programmes serve young men and women, entrepreneurs, professionals and community
              builders who want to lead with biblical Kingdom principles — without compromising
              excellence or integrity.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Young leaders", "Entrepreneurs", "Professionals", "Teams & communities"].map(
              (item) => (
                <div
                  key={item}
                  className="border-l-4 border-kla-red bg-white px-5 py-4 text-sm font-semibold tracking-wide text-kla-charcoal uppercase"
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </>
  );
}
