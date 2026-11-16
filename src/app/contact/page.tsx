import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description: "Enquire about leadership education, coaching or training with Kingdom Leadership Academy.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="Tell us about your goals. We will follow up about education, coaching or training options that fit."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-kla-red uppercase">
              Reach us
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-kla-charcoal uppercase">
              Start the conversation
            </h2>
            <p className="mt-4 text-base leading-relaxed text-kla-muted">
              Share a short note about what you are looking for. Whether it is personal growth,
              team training or coaching support, we would like to hear from you.
            </p>

            <dl className="mt-8 space-y-5 border-t border-kla-line pt-8">
              <div>
                <dt className="text-xs font-semibold tracking-[0.18em] text-kla-muted uppercase">
                  Email
                </dt>
                <dd className="mt-2 text-base text-kla-charcoal">
                  <a
                    href="mailto:info@kingdomleadershipacademy.co.za"
                    className="hover:text-kla-red"
                  >
                    info@kingdomleadershipacademy.co.za
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.18em] text-kla-muted uppercase">
                  Location
                </dt>
                <dd className="mt-2 text-base text-kla-charcoal">South Africa</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.18em] text-kla-muted uppercase">
                  Focus
                </dt>
                <dd className="mt-2 text-base text-kla-charcoal">
                  Leadership education · Coaching · Training
                </dd>
              </div>
            </dl>
          </div>

          <div className="border border-kla-line bg-white p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
