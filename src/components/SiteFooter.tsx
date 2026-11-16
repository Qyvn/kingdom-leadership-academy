import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/paths";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-kla-charcoal text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
        <div>
          <Image
            src={assetPath("/brand/logo.png")}
            alt="Kingdom Leadership Academy"
            width={200}
            height={58}
            className="h-12 w-auto"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            Leadership education, coaching and training grounded in biblical Kingdom
            principles.
          </p>
          <p className="mt-4 text-sm italic text-kla-gold">Rule Dominate Subdue</p>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">
            Explore
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/about" className="text-white/80 hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/programs" className="text-white/80 hover:text-white">
                Programs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white/80 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">
            Contact
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>South Africa</li>
            <li>
              <a href="mailto:info@kingdomleadershipacademy.co.za" className="hover:text-white">
                info@kingdomleadershipacademy.co.za
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-white/50 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Kingdom Leadership Academy. All rights reserved.</p>
          <p className="tracking-[0.14em] uppercase">Leadership · Coaching · Training</p>
        </div>
      </div>
    </footer>
  );
}
