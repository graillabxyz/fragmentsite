import { ArrowLeft, Bolt } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { EarlyAccessForm } from "@/components/early-access-form";

const benefits = [
  ["Priority waves", "Get considered as early test seats open."],
  ["Founder identity", "Cosmetic recognition for helping shape Fragment before launch."],
  ["Rules access", "Follow the evolving paper-ready rules and playtest notes."],
];

export default function EarlyAccessPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-void">
      <Image
        src="/art/old-rock-forest.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover opacity-55"
      />
      <Image
        src="/art/old-rock-common-foreground.webp"
        alt=""
        width={1500}
        height={1000}
        priority
        className="pointer-events-none absolute bottom-0 right-[-18%] -z-10 hidden h-[82vh] w-auto object-contain object-bottom opacity-85 drop-shadow-[0_24px_80px_rgba(240,196,92,0.16)] lg:block"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-void via-void/88 to-void/38" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-void via-transparent to-void/60" />

      <div className="container relative z-10 py-8 sm:py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100 transition hover:text-white"
        >
          <ArrowLeft className="size-4" />
          Back to Fragment
        </Link>

        <div className="grid gap-10 py-12 lg:grid-cols-[0.72fr_0.88fr] lg:items-start lg:py-20">
          <section className="max-w-2xl">
            <Bolt className="mb-5 size-8 text-cyan-100" />
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.34em] text-amber-100/80">
              First Fracture Access
            </p>
            <h1 className="text-4xl font-semibold tracking-normal text-white sm:text-6xl">
              Join the early access list
            </h1>
            <p className="mt-6 text-base leading-8 text-slate-300">
              Tell us where you play and how you found Fragment. The first invites
              will prioritize players who can help test six-second combat, Hero
              identities, Flux interactions, and the paper-ready rules.
            </p>

            <div className="mt-8 grid gap-3">
              {benefits.map(([title, body]) => (
                <div key={title} className="border border-white/10 bg-white/[0.04] p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
                    {title}
                  </div>
                  <div className="mt-2 text-sm leading-6 text-slate-400">{body}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="relative">
            <EarlyAccessForm />
          </section>
        </div>
      </div>
    </main>
  );
}
