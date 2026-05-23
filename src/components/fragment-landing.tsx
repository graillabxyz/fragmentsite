import {
  ArrowRight,
  Atom,
  Bolt,
  Brain,
  Clock3,
  Flame,
  Gem,
  Layers3,
  Orbit,
  Shield,
  Snowflake,
  Sparkles,
  Swords,
  TimerReset,
  Zap,
} from "lucide-react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import type { CSSProperties } from "react";

type Card = {
  title: string;
  body: string;
  icon: LucideIcon;
};

type Infection = {
  name: string;
  element: string;
  icon: LucideIcon;
  className: string;
};

const hooks: Card[] = [
  {
    title: "Choose a Hero",
    body: "Start with one command unit, then build a deck around their tempo, infection path, and tactical identity.",
    icon: Shield,
  },
  {
    title: "Spend Your 6 Seconds",
    body: "Every attack, ability, relic, and card consumes time. The turn is a tactical window.",
    icon: Clock3,
  },
  {
    title: "Flux Through the Stack",
    body: "Flux cards may be used whenever you have priority, either to push an action or answer one already on the stack.",
    icon: Layers3,
  },
];

const timelineExamples = [
  {
    label: "Clean split",
    actions: [
      { name: "Base Attack", seconds: 3, className: "bg-red-400/25 text-red-100" },
      { name: "Mind Spike", seconds: 3, className: "bg-violet-400/25 text-violet-100" },
    ],
  },
  {
    label: "Branch split",
    actions: [
      { name: "Phase Step", seconds: 2, className: "bg-cyan-300/25 text-cyan-50" },
      { name: "Flux", seconds: 1, className: "bg-amber-300/25 text-amber-50" },
      { name: "Base Attack", seconds: 3, className: "bg-red-400/25 text-red-100" },
    ],
  },
];

const cardTypes = [
  { name: "Hero", icon: Shield, role: "command unit", className: "border-cyan-200/40" },
  { name: "Ability", icon: Brain, role: "spend seconds", className: "border-violet-300/40" },
  { name: "Relic", icon: Gem, role: "alter attacks", className: "border-amber-200/40" },
  { name: "Companion", icon: Orbit, role: "temporary ally", className: "border-emerald-200/40" },
  { name: "Flux Card", icon: Bolt, role: "priority access", className: "border-amber-200/45" },
];

const identityChips = [
  { name: "Red", role: "Burst pressure", icon: Flame, className: "border-red-400/35 from-red-500/30 text-red-100" },
  { name: "Blue", role: "Slow denial", icon: Snowflake, className: "border-blue-300/35 from-blue-400/30 text-blue-100" },
  { name: "Yellow", role: "Spread pressure", icon: Sparkles, className: "border-yellow-200/35 from-yellow-300/25 text-yellow-50" },
  { name: "Turquoise", role: "Speed economy", icon: Zap, className: "border-cyan-300/35 from-cyan-300/25 text-cyan-50" },
  { name: "Purple", role: "Mind control", icon: Brain, className: "border-violet-300/35 from-violet-400/30 text-violet-100" },
  { name: "Gold", role: "Relic control", icon: Gem, className: "border-amber-200/40 from-amber-300/25 text-amber-100" },
  { name: "Silver", role: "Combat efficiency", icon: Swords, className: "border-slate-100/35 from-slate-100/18 text-slate-100" },
  { name: "Aquamarine", role: "Time shifts", icon: TimerReset, className: "border-teal-200/35 from-teal-300/24 text-teal-50" },
  { name: "White", role: "Plasma offense", icon: Atom, className: "border-white/40 from-white/20 text-white" },
  { name: "Black", role: "Sacrifice loops", icon: Orbit, className: "border-zinc-400/30 from-zinc-700/28 text-zinc-100" },
];

const infections: Infection[] = [
  { name: "Red", element: "Fire / Burst damage", icon: Flame, className: "border-red-400/40 bg-red-500/10 text-red-100" },
  { name: "Blue", element: "Ice / Slow and denial", icon: Snowflake, className: "border-blue-300/40 bg-blue-400/10 text-blue-100" },
  { name: "Yellow", element: "Gas / Spread and pressure", icon: Sparkles, className: "border-yellow-200/40 bg-yellow-300/10 text-yellow-50" },
  { name: "Turquoise", element: "Electricity / Speed and efficiency", icon: Zap, className: "border-cyan-300/40 bg-cyan-300/10 text-cyan-50" },
  { name: "Purple", element: "Force and Mind / Manipulation", icon: Brain, className: "border-violet-300/40 bg-violet-400/10 text-violet-50" },
  { name: "Gold", element: "Ferrokinesis / Relics and control", icon: Gem, className: "border-amber-200/50 bg-amber-300/10 text-amber-50" },
  { name: "Silver", element: "Physical Enhancement / Combat efficiency", icon: Swords, className: "border-slate-100/45 bg-slate-100/10 text-slate-50" },
  { name: "Aquamarine", element: "Temporal / Time manipulation", icon: TimerReset, className: "border-teal-200/45 bg-teal-300/10 text-teal-50" },
  { name: "White", element: "Plasma / Pure energy offense", icon: Atom, className: "border-white/50 bg-white/10 text-white" },
  { name: "Black", element: "Dark Matter / Sacrifice and corruption", icon: Orbit, className: "border-zinc-400/35 bg-zinc-950/80 text-zinc-100" },
];

const loadingLines = [
  "Time does not destroy. It specializes.",
  "Every decision removes futures.",
  "Reality narrows with action.",
  "Power is accelerated fragmentation.",
  "Nothing remains whole forever.",
];

const heroes = [
  {
    name: "Red Vector",
    path: "Fire / Burst",
    src: "/art/hero-red-female.webp",
    accent: "from-red-500/35",
  },
  {
    name: "Blue Runner",
    path: "Ice / Denial",
    src: "/art/hero-blue-female.webp",
    accent: "from-cyan-400/35",
  },
  {
    name: "Purple Seer",
    path: "Mind / Force",
    src: "/art/hero-purple-female.webp",
    accent: "from-violet-400/35",
  },
  {
    name: "Pure Anchor",
    path: "Pure / Adaptable",
    src: "/art/hero-common-male.webp",
    accent: "from-amber-300/30",
  },
  {
    name: "Blue Warden",
    path: "Ice / Control",
    src: "/art/hero-blue-male.webp",
    accent: "from-blue-400/35",
  },
  {
    name: "Red Crown",
    path: "Fire / Pressure",
    src: "/art/hero-red-male.webp",
    accent: "from-red-600/35",
  },
];

const fragmentShards = [
  { x: "70%", y: "16%", w: "6.2rem", h: "8rem", r: "18deg", o: 0.36 },
  { x: "81%", y: "26%", w: "4.8rem", h: "5.6rem", r: "-24deg", o: 0.32 },
  { x: "76%", y: "48%", w: "3.6rem", h: "4.4rem", r: "34deg", o: 0.3 },
  { x: "86%", y: "58%", w: "2.8rem", h: "3.2rem", r: "-12deg", o: 0.26 },
  { x: "64%", y: "64%", w: "2.4rem", h: "3rem", r: "48deg", o: 0.25 },
  { x: "91%", y: "38%", w: "1.7rem", h: "2.1rem", r: "28deg", o: 0.24 },
  { x: "58%", y: "18%", w: "2rem", h: "2.7rem", r: "-38deg", o: 0.28 },
  { x: "88%", y: "76%", w: "1.2rem", h: "1.7rem", r: "16deg", o: 0.2 },
];

function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const styles =
    variant === "primary"
      ? "border-cyan-200/60 bg-cyan-100 text-void shadow-fracture-cyan hover:bg-white"
      : "border-white/15 bg-white/[0.04] text-edge hover:border-white/35 hover:bg-white/[0.08]";

  return (
    <a
      href={href}
      className={`group inline-flex min-h-11 items-center justify-center gap-2 border px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition duration-300 ${styles}`}
    >
      {children}
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

function FragmentationField({ className = "" }: { className?: string }) {
  return (
    <div className={`fragmentation-field pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <div className="fragment-core" />
      {fragmentShards.map((shard) => (
        <div
          key={`${shard.x}-${shard.y}`}
          className="fragment-shard"
          style={{
            "--x": shard.x,
            "--y": shard.y,
            "--w": shard.w,
            "--h": shard.h,
            "--r": shard.r,
            "--o": shard.o,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}

function FluxBadge({ label = "Flux" }: { label?: string }) {
  return (
    <div className="group/flux relative inline-flex items-center gap-2">
      <span className="flux-ready flex size-7 items-center justify-center border border-amber-100/55 bg-amber-200/10 text-base leading-none text-amber-100">
        ⚡
      </span>
      {label ? (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-100">
          {label}
        </span>
      ) : null}
      <span className="pointer-events-none absolute left-0 top-full z-20 mt-3 w-64 border border-amber-100/25 bg-void/95 p-3 text-left opacity-0 shadow-[0_18px_45px_rgba(0,0,0,0.35)] backdrop-blur transition duration-200 group-hover/flux:opacity-100">
        <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-amber-100">
          ⚡ Flux
        </span>
        <span className="mt-2 block text-xs normal-case leading-5 tracking-normal text-slate-300">
          May be played whenever you have priority.
        </span>
      </span>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="reveal mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200/80">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {body ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
          {body}
        </p>
      ) : null}
    </div>
  );
}

function FeatureCard({ item }: { item: Card }) {
  const Icon = item.icon;

  return (
    <article className="fracture-panel clip-fragment reveal group p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/35 hover:shadow-fracture-cyan">
      <div className="mb-8 flex size-12 items-center justify-center border border-cyan-100/20 bg-cyan-100/10 text-cyan-100">
        <Icon className="size-5" />
      </div>
      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-300">{item.body}</p>
    </article>
  );
}

function HeroRosterCard({ hero }: { hero: (typeof heroes)[number] }) {
  return (
    <article className="group reveal overflow-hidden border border-white/10 bg-white/[0.035] transition duration-300 hover:-translate-y-1 hover:border-cyan-100/35">
      <div className="relative aspect-[0.82] overflow-hidden">
        <Image
          src={hero.src}
          alt={`${hero.name} hero artwork`}
          fill
          sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 80vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${hero.accent} via-void/10 to-transparent`} />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-void to-transparent" />
      </div>
      <div className="p-4">
        <h3 className="font-title text-sm uppercase tracking-[0.18em] text-white">
          {hero.name}
        </h3>
        <p className="mt-2 text-xs uppercase tracking-[0.16em] text-slate-400">
          {hero.path}
        </p>
      </div>
    </article>
  );
}

function PackShowcase() {
  return (
    <section id="deckbuilding" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_24%_34%,rgba(255,77,61,0.1),transparent_28rem),radial-gradient(circle_at_78%_46%,rgba(47,231,255,0.12),transparent_26rem)]" />
      <div className="container grid gap-10 lg:grid-cols-[0.78fr_1fr] lg:items-center">
        <div className="reveal">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.34em] text-amber-100/80">
            Deckbuilding
          </p>
          <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-5xl">
            Collect cards. Build around your Hero.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
            Fragment is a tactical deckbuilding game: your Hero defines the
            strategy, while packs expand the abilities, relics, equipment,
            Flux cards, companions, and Energy paths you can bring into combat.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ["Hero", "sets the plan"],
              ["Deck", "splits the plan"],
              ["Packs", "expand options"],
            ].map(([value, label]) => (
              <div key={value} className="border border-white/10 bg-white/[0.04] p-4">
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-100">
                  {value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.16em] text-slate-500">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal relative min-h-[520px] overflow-visible">
          <div className="absolute left-1/2 top-[47%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="absolute left-[5%] top-6 w-[50%] max-w-[350px] rotate-[-7deg] drop-shadow-[0_42px_90px_rgba(255,77,61,0.28)] transition duration-500 hover:-translate-y-3 hover:rotate-[-3deg]">
            <Image
              src="/art/pack-mythic-red-transparent.png"
              alt="Old Rock Fragment Mythic Pack"
              width={1024}
              height={1536}
              className="h-auto w-full"
            />
          </div>
          <div className="absolute right-[3%] top-20 w-[48%] max-w-[340px] rotate-[7deg] drop-shadow-[0_42px_90px_rgba(47,231,255,0.24)] transition duration-500 hover:-translate-y-3 hover:rotate-[3deg]">
            <Image
              src="/art/pack-core-blue-transparent.png"
              alt="Old Rock Fragment card pack"
              width={1024}
              height={1536}
              className="h-auto w-full"
            />
          </div>
          <div className="absolute bottom-8 left-1/2 w-[78%] -translate-x-1/2 border border-cyan-100/20 bg-void/80 p-4 text-center text-xs uppercase tracking-[0.22em] text-slate-300 backdrop-blur">
            Open packs. Tune your Hero. Enter the six-second battlefield.
          </div>
        </div>
      </div>
    </section>
  );
}

function SecondsTimeline() {
  return (
    <div className="fracture-panel reveal p-5 sm:p-6 lg:col-span-7">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/70">
            6-second turn window
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Spend time like a resource</h3>
        </div>
        <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
          Every action occupies the turn
        </div>
      </div>
      <div className="grid grid-cols-6 border border-white/10">
        {[1, 2, 3, 4, 5, 6].map((second) => (
          <div key={second} className="relative min-h-16 border-r border-white/10 bg-white/[0.03] p-3 last:border-r-0">
            <span className="text-xs font-semibold text-cyan-100">{second}s</span>
            <span className="absolute inset-x-3 bottom-3 h-px bg-cyan-100/30" />
          </div>
        ))}
      </div>
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {timelineExamples.map((example) => (
          <div key={example.label} className="border border-white/10 bg-void/50 p-4">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {example.label}
            </div>
            <div className="flex overflow-hidden border border-white/10">
              {example.actions.map((action) => (
                <div
                  key={`${example.label}-${action.name}`}
                  className={`${action.className} flex min-h-16 items-center justify-center border-r border-white/10 px-3 text-center text-xs font-semibold uppercase tracking-[0.14em] last:border-r-0`}
                  style={{ width: `${(action.seconds / 6) * 100}%` }}
                >
                  <span className="font-title">{action.name}</span> / {action.seconds}s
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroCommandPanel() {
  return (
    <div className="fracture-panel reveal p-5 sm:p-6 lg:col-span-5">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/70">
            Hero command unit
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Your board has a center</h3>
        </div>
        <Shield className="size-8 text-cyan-100" />
      </div>
      <div className="grid gap-4 md:grid-cols-[0.72fr_1fr]">
        <div className="relative overflow-hidden border border-cyan-100/20 bg-cyan-100/10">
          <Image
            src="/art/hero-purple-female.webp"
            alt="Purple Seer hero card"
            width={760}
            height={760}
            className="aspect-[0.78] w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-void via-void/70 to-transparent p-4">
            <div className="font-title text-sm uppercase tracking-[0.2em] text-white">Purple Seer</div>
            <div className="mt-1 text-xs uppercase tracking-[0.16em] text-violet-100">Mind / Force</div>
          </div>
        </div>
        <div className="grid gap-3">
          {[
            ["HP", "24", "survive pressure"],
            ["Initiative", "High", "acts first"],
            ["Base Attack", "3s / 2 dmg", "physical strike"],
            ["Flux Ability", "Psionic Echo", "priority access"],
          ].map(([label, value, note]) => (
            <div key={label} className="grid grid-cols-[0.8fr_1fr] items-center border border-white/10 bg-white/[0.035] p-3">
              <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">{label}</div>
              <div>
                <div className="font-title text-sm text-white">{value}</div>
                <div className="text-xs text-slate-500">{note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StackDemo() {
  const stackSteps = [
    {
      step: "1",
      name: "Mind Spike",
      note: "Deal 3 psionic damage to the enemy Hero.",
      type: "Ability",
      cost: "3s / 2E",
      effect: "Target Hero takes 3 psionic damage.",
      accent: "border-violet-200/30 bg-violet-400/10",
      flux: false,
    },
    {
      step: "2",
      name: "Flux Guard",
      note: "Opponent plays a Flux card to prevent 2 damage.",
      type: "Flux Card",
      cost: "⚡ / 1E",
      effect: "Prevent the next 2 damage to your Hero.",
      accent: "border-amber-100/30 bg-amber-200/10",
      flux: true,
    },
    {
      step: "3",
      name: "Neural Cut",
      note: "You answer with Flux: disable that prevention.",
      type: "Flux Card",
      cost: "⚡ / 1E",
      effect: "Remove prevention text from one stack effect.",
      accent: "border-cyan-100/30 bg-cyan-100/10",
      flux: true,
    },
  ];
  const resolveSteps = [
    ["Neural Cut resolves", "Flux Guard loses its prevention text."],
    ["Flux Guard resolves", "No prevention remains to stop the hit."],
    ["Mind Spike resolves", "3 damage lands on the enemy Hero."],
  ];
  const fluxWindows = [
    ["Proactive", "start pressure on your turn"],
    ["Interrupt", "answer an action as it appears"],
    ["Reaction", "respond while the stack is open"],
  ];

  return (
    <div className="fracture-panel reveal p-5 sm:p-6 lg:col-span-7">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-100/70">
            Stack and Flux
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Play with priority, resolve backward</h3>
        </div>
        <div className="border border-amber-200/30 bg-amber-200/10 px-3 py-2">
          <FluxBadge label="Flux card" />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-[1fr_0.22fr_1fr] md:items-center">
        <div className="space-y-3">
          {stackSteps.map((card, index) => (
            <div
              key={card.name}
              className={`group/card relative border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-100/35 ${card.flux ? "flux-ready border-amber-100/25" : ""}`}
              style={{ marginLeft: `${index * 22}px` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
                    Stack {card.step}
                  </span>
                  <div className="font-title mt-3 text-lg text-white">{card.name}</div>
                  <div className="mt-2 text-xs leading-5 text-slate-400">{card.note}</div>
                </div>
                <div className="flex shrink-0 items-start gap-2">
                  {card.flux ? <FluxBadge label="" /> : <Layers3 className="mt-1 size-4 text-slate-400" />}
                  <button
                    type="button"
                    className={`relative border px-2.5 py-2 text-left transition hover:-translate-y-0.5 focus:outline-none focus:ring-1 focus:ring-cyan-100/50 ${card.accent}`}
                    aria-label={`${card.name} card preview`}
                  >
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-100">
                      Card
                    </span>
                    <span className="mt-1 block text-[10px] uppercase tracking-[0.14em] text-slate-400">
                      {card.cost}
                    </span>
                    <span className="pointer-events-none absolute right-0 top-full z-30 mt-3 w-64 translate-y-1 border border-cyan-100/25 bg-void/95 p-3 text-left opacity-0 shadow-[0_18px_45px_rgba(0,0,0,0.4)] backdrop-blur transition duration-200 group-hover/card:translate-y-0 group-hover/card:opacity-100 group-focus-within/card:translate-y-0 group-focus-within/card:opacity-100">
                      <span className="flex items-center justify-between gap-3">
                        <span className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                          {card.type}
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-100">
                          {card.cost}
                        </span>
                      </span>
                      <span className="font-title mt-5 block text-base text-white">
                        {card.name}
                      </span>
                      <span className="mt-3 block border-t border-white/10 pt-3 text-xs leading-5 text-slate-300">
                        {card.effect}
                      </span>
                      {card.flux ? (
                        <span className="absolute right-3 top-9 text-lg leading-none text-amber-100">
                          ⚡
                        </span>
                      ) : null}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden text-center text-xs uppercase tracking-[0.18em] text-slate-500 md:block">
          resolves
          <ArrowRight className="mx-auto mt-3 size-8 rotate-90 text-cyan-100" />
          last in
          <br />
          first out
        </div>
        <div className="space-y-3">
          {resolveSteps.map(([item, note], index) => (
            <div key={item} className="border border-cyan-100/20 bg-cyan-100/10 p-4">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
                Resolve 0{index + 1}
              </span>
              <div className="font-title mt-2 text-sm text-white">{item}</div>
              <div className="mt-2 text-xs leading-5 text-slate-400">{note}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 grid gap-2 sm:grid-cols-3">
        {fluxWindows.map(([window, note]) => (
          <div key={window} className="border border-amber-100/20 bg-amber-200/[0.06] p-3">
            <div className="mb-2 flex items-center justify-between">
              <Bolt className="size-4 text-amber-100" />
              <span className="text-[10px] uppercase tracking-[0.18em] text-amber-100/70">
                Flux
              </span>
            </div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              {window}
            </div>
            <div className="mt-2 text-[11px] leading-4 text-slate-400">{note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EnergyAndAttack() {
  return (
    <div className="grid gap-5 lg:col-span-5">
      <div className="fracture-panel reveal p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/70">
          Energy development
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Deploy Energy, then spend it with seconds</h3>
        <div className="mt-5 grid grid-cols-3 gap-3">
          {[1, 2, 3].map((turn) => (
            <div key={turn} className="border border-cyan-100/15 bg-cyan-100/[0.06] p-4 text-center">
              <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Turn {turn}</div>
              <div className="mt-3 text-3xl font-semibold text-cyan-100">{turn}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">Energy deployed</div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3 border border-white/10 bg-white/[0.035] p-3 text-xs uppercase tracking-[0.16em] text-slate-300">
          <Gem className="size-4 text-cyan-100" />
          Energy cards deploy to the battlefield and grow future turns
        </div>
      </div>
      <div className="fracture-panel reveal p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-100/70">
          Attack pattern
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="border border-red-200/20 bg-red-400/10 p-4">
            <Swords className="mb-4 size-5 text-red-100" />
            <div className="font-title text-xl text-white">Base Attack</div>
            <div className="mt-2 text-xs uppercase tracking-[0.16em] text-slate-400">3s / 2 damage</div>
          </div>
          <div className="border border-amber-200/20 bg-amber-300/10 p-4">
            <Gem className="mb-4 size-5 text-amber-100" />
            <div className="font-title text-xl text-white">Relic Buff</div>
            <div className="mt-2 text-xs uppercase tracking-[0.16em] text-slate-400">+1 damage</div>
          </div>
          <div className="border border-cyan-100/20 bg-cyan-100/10 p-4">
            <Clock3 className="mb-4 size-5 text-cyan-100" />
            <div className="font-title text-xl text-white">Window Left</div>
            <div className="mt-2 text-xs uppercase tracking-[0.16em] text-slate-400">3 seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardsAndIdentity() {
  return (
    <div className="fracture-panel reveal p-5 sm:p-6 lg:col-span-12">
      <div className="mb-6 grid gap-4 lg:grid-cols-[0.7fr_1fr] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-100/70">
            Deck identity
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Decks split into tactical parts</h3>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-slate-400 lg:justify-self-end">
          Card types define what enters the loop. Infection paths color how that loop
          pressures, denies, accelerates, or corrupts the fight.
        </p>
      </div>
      <div className="grid gap-5 xl:grid-cols-[0.62fr_1fr]">
        <div>
          <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
              Deck anatomy
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
              Hero + cards
            </span>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-1">
          {cardTypes.map((type) => {
            const Icon = type.icon;
            return (
              <div
                key={type.name}
                className={`group grid min-h-20 grid-cols-[2.8rem_1fr] items-center gap-3 border bg-white/[0.035] p-3 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07] ${type.className}`}
              >
                <div className="flex size-11 items-center justify-center border border-current/25 bg-white/[0.035] text-cyan-100">
                  <Icon className="size-5" />
                </div>
                <div className="min-w-0">
                  <div className="font-title text-sm uppercase tracking-[0.16em] text-white">
                    {type.name}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-500">
                    {type.role}
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
        <div>
          <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-100">
              Infection palette
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
              10 paths
            </span>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {identityChips.map((identity) => {
              const Icon = identity.icon;
              return (
                <div
                  key={identity.name}
                  className={`group min-h-24 border bg-gradient-to-br ${identity.className} to-white/[0.025] p-3 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]`}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <Icon className="size-4 opacity-85" />
                    <span className="h-px w-8 bg-current opacity-30 transition-all duration-300 group-hover:w-12" />
                  </div>
                  <div className="font-title text-base text-white">{identity.name}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.16em] opacity-75">
                    {identity.role}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-5 border border-white/10 bg-white/[0.03] p-3 text-xs uppercase tracking-[0.16em] text-slate-500">
        A deck is not one color block. It is a chosen fracture pattern: card type, time cost,
        Energy curve, and infection pressure all splitting from the Hero.
      </div>
    </div>
  );
}

function GameplaySystems() {
  return (
    <section id="systems" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(47,231,255,0.09),transparent_30rem),radial-gradient(circle_at_82%_34%,rgba(255,77,61,0.08),transparent_28rem)]" />
      <FragmentationField className="z-0 opacity-35 [transform:scaleX(-1)]" />
      <div className="container relative z-10">
        <div className="reveal mb-10 grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.34em] text-red-200/80">
              Gameplay System
            </p>
            <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-5xl">
              Read the whole turn in one scan
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-300 lg:justify-self-end">
            Fragment is driven by a tight loop: choose a Hero, build Energy,
            spend six seconds, place actions on the stack, then use Flux
            whenever priority opens.
          </p>
        </div>
        <div className="mb-5 grid gap-3 sm:grid-cols-4">
          {[
            ["1", "Hero"],
            ["2", "Energy"],
            ["3", "Seconds"],
            ["4", "Stack"],
          ].map(([step, label]) => (
            <div key={label} className="border border-white/10 bg-white/[0.035] p-4">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
                {step}
              </span>
              <div className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-white">
                {label}
              </div>
            </div>
          ))}
        </div>
        <div className="grid gap-5 lg:grid-cols-12">
          <SecondsTimeline />
          <HeroCommandPanel />
          <StackDemo />
          <EnergyAndAttack />
          <CardsAndIdentity />
        </div>
      </div>
    </section>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-void/72 backdrop-blur-xl">
      <nav className="container flex h-16 items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <span className="size-6 border border-cyan-100/50 bg-cyan-100/10 [clip-path:polygon(0_0,100%_12%,82%_100%,0_76%)]" />
          <span className="font-title text-sm uppercase tracking-[0.24em] text-white">
            Fragment
          </span>
        </a>
        <div className="hidden items-center gap-7 text-xs font-medium uppercase tracking-[0.18em] text-slate-300 lg:flex">
          <a className="transition hover:text-cyan-100" href="#core">Game</a>
          <a className="transition hover:text-cyan-100" href="#heroes">Heroes</a>
          <a className="transition hover:text-cyan-100" href="#systems">Systems</a>
          <a className="transition hover:text-cyan-100" href="#infection">Infection</a>
          <a className="transition hover:text-cyan-100" href="#philosophy">World</a>
        </div>
        <a
          href="/early-access"
          className="border border-cyan-100/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100 transition hover:bg-cyan-100 hover:text-void"
        >
          Early Access
        </a>
      </nav>
    </header>
  );
}

export function FragmentLanding() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Nav />

      <section id="hero" className="relative isolate flex min-h-screen items-center pt-24">
        <Image
          src="/art/old-rock-hero-ruins-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_68%_42%,rgba(91,33,182,0.04),rgba(5,6,8,0.22)_42%,#050608_92%)]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-void/20 via-void/62 to-void lg:bg-gradient-to-r lg:from-void lg:via-void/62 lg:to-void/8" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-52 bg-gradient-to-t from-void to-transparent" />
        <FragmentationField className="z-0 opacity-45 [mask-image:linear-gradient(to_right,transparent,black_42%,black_92%,transparent)]" />
        <div className="container relative z-10 grid items-center gap-12 pb-20 lg:grid-cols-[1fr_0.86fr]">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.42em] text-cyan-100">
              Everything Fragments.
            </p>
            <h1 className="text-6xl font-semibold tracking-normal text-white sm:text-7xl lg:text-8xl">
              Fragment
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-200 sm:text-2xl">
              A hero-based tactical deckbuilding card game where combat unfolds in six-second windows.
            </p>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
              Build your deck around one Hero, manage Energy, spend seconds on
              decisive actions, and fight through stack-based Flux interactions.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#core">Explore the Game</Button>
              <Button href="/early-access" variant="secondary">Join Early Access</Button>
            </div>
            <p className="mt-6 max-w-xl text-xs uppercase tracking-[0.2em] text-slate-500">
              Launching first as a digital card game. Designed for physical play in the future.
            </p>
          </div>
          <div className="relative hidden min-h-[620px] lg:block">
            <div className="absolute right-0 top-1/2 h-[560px] w-[440px] -translate-y-1/2 overflow-hidden border border-violet-200/20 bg-violet-300/10 shadow-[0_40px_120px_rgba(167,139,250,0.18)]">
              <Image
                src="/art/hero-purple-male-feature.png"
                alt="Purple infected Fragment hero"
                fill
                priority
                sizes="440px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-100">
                  Purple / Mind
                </div>
                <div className="font-title mt-2 text-2xl text-white">
                  Flux control Hero
                </div>
              </div>
            </div>
            <div className="absolute right-80 top-24 border border-cyan-100/25 bg-void/70 px-4 py-3 text-xs uppercase tracking-[0.2em] text-cyan-100 shadow-[0_0_38px_rgba(47,231,255,0.16)] backdrop-blur">
              Stack pressure online
            </div>
            <div className="absolute bottom-28 right-64 border border-violet-100/25 bg-void/70 px-4 py-3 text-xs uppercase tracking-[0.2em] text-violet-100 shadow-[0_0_38px_rgba(167,139,250,0.18)] backdrop-blur">
              Flux cards ready
            </div>
          </div>
        </div>
      </section>

      <section id="core" className="container py-24">
        <SectionTitle
          eyebrow="Core Hook"
          title="A card game measured in seconds"
          body="Each turn gives your Hero 6 seconds. Every attack, ability, relic, or card takes time. Flux cards can be played whenever you have priority, opening tactical stack exchanges."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {hooks.map((item) => <FeatureCard key={item.title} item={item} />)}
        </div>
      </section>

      <PackShowcase />

      <section id="heroes" className="container py-24">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div className="reveal">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200/80">
              Hero Identities
            </p>
            <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-5xl">
              Build around a single fractured combatant
            </h2>
          </div>
          <p className="reveal max-w-2xl text-base leading-8 text-slate-300 lg:justify-self-end">
            Every deck begins with a Hero. Their infection path, durability,
            seconds economy, and personal relic synergies define what your
            cards are trying to become.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {heroes.map((hero) => (
            <HeroRosterCard key={hero.name} hero={hero} />
          ))}
        </div>
      </section>

      <GameplaySystems />

      <section id="infection" className="relative py-24">
        <Image
          src="/art/fragment-infection.webp"
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover opacity-50"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-void via-void/75 to-void" />
        <div className="container">
          <SectionTitle
            eyebrow="Infection Types"
            title="Ten paths through fractured power"
            body="Each path specializes the Hero and deck toward a distinct pressure profile, from clean plasma offense to corrupt dark matter exchange."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {infections.map((infection) => {
              const Icon = infection.icon;
              return (
                <article key={infection.name} className={`reveal group border p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 ${infection.className}`}>
                  <div className="mb-7 flex items-center justify-between">
                    <Icon className="size-5" />
                    <span className="h-px w-16 bg-current opacity-[0.35] transition-all duration-300 group-hover:w-24" />
                  </div>
                  <h3 className="font-title text-lg text-white">{infection.name}</h3>
                  <p className="mt-3 text-sm leading-6 opacity-80">{infection.element}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="digital-paper" className="container py-24">
        <div className="fracture-panel reveal grid gap-10 p-6 sm:p-10 lg:grid-cols-[0.78fr_1fr_0.46fr] lg:p-14">
          <div className="relative z-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.34em] text-amber-100/80">
              Digital + Physical
            </p>
            <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-5xl">
              Built for Digital. Designed for Paper.
            </h2>
          </div>
          <p className="relative z-10 text-base leading-8 text-slate-300">
            Fragment is being developed first as a digital game with automated rules,
            animated stack interactions, and fast matchmaking. The core rules are being
            designed with physical cards in mind, so the game can eventually become a
            paper TCG without needing to be redesigned from scratch.
          </p>
          <div className="relative hidden min-h-44 lg:block">
            <Image
              src="/art/fragment-relic.webp"
              alt=""
              width={760}
              height={1140}
              className="absolute -right-8 -top-20 h-72 w-auto rotate-12 opacity-90 drop-shadow-[0_24px_55px_rgba(47,231,255,0.2)]"
            />
          </div>
        </div>
      </section>

      <section id="philosophy" className="container py-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-center">
          <div className="reveal">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.34em] text-cyan-100/80">
              Philosophy
            </p>
            <h2 className="text-4xl font-semibold tracking-normal text-white sm:text-6xl">
              Everything Fragments
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              In the world of Fragment, reality does not simply decay. It specializes.
              Concepts, memories, bodies, powers, and civilizations split into increasingly
              specific versions of themselves as time passes. Every Hero is a fragment of
              what they were, what they believe, and what they are becoming.
            </p>
          </div>
          <div className="space-y-3">
            {loadingLines.map((line, index) => (
              <div key={line} className="reveal flex items-center gap-4 border border-white/10 bg-white/[0.035] p-4 text-sm uppercase tracking-[0.16em] text-slate-200">
                <span className="text-cyan-100/70">{(index + 1).toString().padStart(2, "0")}</span>
                <span>{line}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="early-access" className="container pb-20 pt-16">
        <div className="relative overflow-hidden border border-cyan-100/20 p-8 shadow-fracture-cyan sm:p-14 lg:min-h-[560px]">
          <Image
            src="/art/old-rock-forest.webp"
            alt=""
            fill
            sizes="(min-width: 1024px) 1180px, 100vw"
            className="absolute inset-0 -z-20 object-cover opacity-70"
          />
          <Image
            src="/art/old-rock-common-foreground.webp"
            alt=""
            width={1500}
            height={1000}
            className="pointer-events-none absolute bottom-0 right-[-8%] z-0 hidden h-[88%] w-auto object-contain object-bottom opacity-90 drop-shadow-[0_24px_70px_rgba(240,196,92,0.16)] lg:block"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-void via-void/82 to-void/18" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-void via-transparent to-void/30" />
          <div className="absolute inset-x-8 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
          <div className="relative z-10 max-w-2xl text-left">
            <Bolt className="mb-5 size-8 text-cyan-100" />
            <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-5xl">
              Enter the Fracturing World
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Join the first wave of players studying the six-second battlefield,
              testing Hero identities, and shaping Fragment before launch.
            </p>
            <div className="mt-7 grid gap-3">
              {[
                ["Priority invite waves", "Get considered for early test access as seats open."],
                ["Founder identity", "Cosmetic recognition for players who helped before launch."],
                ["Rules access", "Follow the evolving paper-ready rules before the wider public."],
              ].map(([title, body]) => (
                <div key={title} className="border border-white/10 bg-white/[0.04] p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
                    {title}
                  </div>
                  <div className="mt-2 text-sm leading-6 text-slate-400">{body}</div>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="/early-access">Join Early Access</Button>
              <Button href="#systems" variant="secondary">Read the Rules</Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="container flex flex-col gap-3 text-xs uppercase tracking-[0.18em] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>Fragment / Old Rock Universe</span>
          <span>Every second matters.</span>
        </div>
      </footer>
    </main>
  );
}
