import {
  ArrowRight,
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
  Zap,
} from "lucide-react";
import Image from "next/image";
import { GameButton } from "@/components/game-button";
import type { LucideIcon } from "lucide-react";
import type { CSSProperties } from "react";

type Card = {
  title: string;
  body: string;
  icon: LucideIcon;
};

type ColoredEnergy = {
  icon: LucideIcon;
  className: string;
  label: string;
};

type CardCost = {
  seconds?: number;
  colorless?: number;
  colored?: ColoredEnergy[];
  flux?: boolean;
};

type HeroPromoCard = {
  kicker: string;
  title: string;
  action: string;
  src?: string;
  className: string;
  icon?: "discord";
};

const hooks: Card[] = [
  {
    title: "Choose a Hero",
    body: "Start with one command unit, then build a deck around their tempo, strain, and tactical identity.",
    icon: Shield,
  },
  {
    title: "Spend Your 6 Seconds",
    body: "Every attack, ability, relic, and card consumes time. The turn is a tactical window.",
    icon: Clock3,
  },
  {
    title: "Instants Open the Thread",
    body: "Instant cards may be used whenever you have priority, either to push an action or answer one already on the Thread.",
    icon: Layers3,
  },
];

const heroFeatureCallouts = [
  { title: "Fast-paced", body: "6-second combat", icon: Zap },
  { title: "Hero powers", body: "build, combo, dominate", icon: Shield },
  { title: "New challenge", body: "every run, every turn", icon: Swords },
];

const heroPromoCards: HeroPromoCard[] = [
  {
    kicker: "Latest Drop",
    title: "New Hero Reveal",
    action: "Explore",
    src: "/art/promo-new-hero-bg.png",
    className: "from-red-500/40",
  },
  {
    kicker: "Dev Update",
    title: "Combat System Deep Dive",
    action: "Read More",
    src: "/art/promo-combat-system-bg.png",
    className: "from-ember/35",
  },
  {
    kicker: "Community",
    title: "Join the Discord",
    action: "Join Now",
    className: "from-[#5865f2]/24",
    icon: "discord",
  },
];

const timelineExamples = [
  {
    label: "Example turn A",
    title: "Attack, then lock timing",
    result: "Base Attack 3s + Frost Lock 3s = full turn",
    actions: [
      { name: "Base Attack", seconds: 3, className: "bg-red-400/25 text-red-100" },
      { name: "Frost Lock", seconds: 3, className: "bg-blue-400/25 text-blue-100" },
    ],
  },
  {
    label: "Example turn B",
    title: "Move, answer, then strike",
    result: "Phase Step 2s + Instant 1s + Base Attack 3s = full turn",
    actions: [
      { name: "Phase Step", seconds: 2, className: "bg-cyan-300/25 text-cyan-50" },
      { name: "Instant", seconds: 1, className: "bg-amber-300/25 text-amber-50" },
      { name: "Base Attack", seconds: 3, className: "bg-red-400/25 text-red-100" },
    ],
  },
];

const cardTypes = [
  { name: "Hero", icon: Shield, role: "command unit", className: "border-cyan-200/40" },
  { name: "Ability", icon: Brain, role: "spend seconds", className: "border-violet-300/40" },
  { name: "Relic", icon: Gem, role: "alter attacks", className: "border-amber-200/40" },
  { name: "Companion", icon: Orbit, role: "temporary ally", className: "border-emerald-200/40" },
  { name: "Instant", icon: Bolt, role: "priority access", className: "border-amber-200/45" },
];

const launchIdentities = [
  {
    name: "Red",
    signal: "Pressure / Fire / Momentum",
    body: "Red wins by forcing the fight forward: aggression, self-damage, attack empowerment, and burning momentum.",
    icon: Flame,
    className: "border-red-400/40 bg-red-500/10 text-red-100",
  },
  {
    name: "Blue",
    signal: "Tempo / Ice / Timing",
    body: "Blue controls the six-second window: timing denial, freeze effects, tactical responses, Thread interaction, and precision control.",
    icon: Snowflake,
    className: "border-blue-300/40 bg-blue-400/10 text-blue-100",
  },
];

const unstableFragments = [
  { mark: "03", icon: Brain, className: "border-violet-100/20 bg-violet-200/[0.035]" },
  { mark: "04", icon: Sparkles, className: "border-yellow-100/20 bg-yellow-200/[0.035]" },
  { mark: "05", icon: Zap, className: "border-cyan-100/20 bg-cyan-200/[0.035]" },
  { mark: "06", icon: Gem, className: "border-amber-100/20 bg-amber-200/[0.035]" },
  { mark: "07", icon: Swords, className: "border-slate-100/20 bg-slate-200/[0.035]" },
  { mark: "08", icon: Orbit, className: "border-zinc-100/20 bg-zinc-200/[0.025]" },
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
    src: "/art/hero-red-vector-square.jpg",
    accent: "from-red-500/35",
  },
  {
    name: "Blue Runner",
    path: "Ice / Denial",
    src: "/art/hero-blue-female.webp",
    accent: "from-cyan-400/35",
  },
  {
    name: "Red Crown",
    path: "Fire / Pressure",
    src: "/art/hero-red-male.webp",
    accent: "from-red-600/35",
  },
  {
    name: "Blue Warden",
    path: "Ice / Control",
    src: "/art/hero-blue-male.webp",
    accent: "from-blue-400/35",
  },
  {
    name: "Red Bastion",
    path: "Fire / Momentum",
    src: "/art/hero-red-bastion-square.jpg",
    accent: "from-red-500/30",
  },
  {
    name: "Blue Parallax",
    path: "Ice / Timing",
    src: "/art/hero-blue-parallax-square.jpg",
    accent: "from-cyan-400/30",
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

function TimeCostPip({ seconds }: { seconds: number }) {
  return (
    <span
      className="inline-flex size-5 items-center justify-center rounded-full border border-black bg-slate-100 text-[9px] font-semibold leading-none text-black shadow-[0_0_0_1px_rgba(255,255,255,0.22)]"
      aria-label={`${seconds} seconds`}
      title={`${seconds} seconds`}
    >
      {seconds}
    </span>
  );
}

function ColorlessEnergyPip({ value }: { value: number }) {
  return (
    <span
      className="inline-flex size-5 items-center justify-center rounded-full border border-slate-300/45 bg-slate-500/85 text-[9px] font-semibold leading-none text-slate-950 shadow-[inset_0_1px_8px_rgba(255,255,255,0.22)]"
      aria-label={`${value} colorless Energy`}
      title={`${value} colorless Energy`}
    >
      {value}
    </span>
  );
}

function ColoredEnergyPip({ energy }: { energy: ColoredEnergy }) {
  const Icon = energy.icon;

  return (
    <span
      className={`inline-flex size-5 items-center justify-center rounded-full border text-white shadow-[inset_0_1px_8px_rgba(255,255,255,0.18)] ${energy.className}`}
      aria-label={energy.label}
      title={energy.label}
    >
      <Icon className="size-2.5" />
    </span>
  );
}

function CostPips({ cost }: { cost: CardCost }) {
  return (
    <span className="inline-flex flex-nowrap items-center gap-1">
      {cost.flux ? (
        <span
          className="inline-flex size-5 items-center justify-center border border-amber-100/55 bg-amber-200/10 text-xs leading-none text-amber-100"
          aria-label="Flux"
          title="Flux"
        >
          ⚡
        </span>
      ) : null}
      {typeof cost.seconds === "number" ? <TimeCostPip seconds={cost.seconds} /> : null}
      {cost.colored?.map((energy, index) => (
        <ColoredEnergyPip key={`${energy.label}-${index}`} energy={energy} />
      ))}
      {typeof cost.colorless === "number" ? <ColorlessEnergyPip value={cost.colorless} /> : null}
    </span>
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
      <p className="tactical-kicker mb-3 text-xs font-semibold uppercase tracking-[0.34em]">
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
    <article className="fracture-panel clip-fragment reveal group p-6 transition duration-300 hover:-translate-y-1 hover:border-red-200/35 hover:shadow-[0_0_44px_rgba(255,77,61,0.16)]">
      <div className="mb-8 flex size-12 items-center justify-center border border-red-100/20 bg-red-500/10 text-red-100">
        <Icon className="size-5" />
      </div>
      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-300">{item.body}</p>
    </article>
  );
}

function HeroRosterCard({ hero }: { hero: (typeof heroes)[number] }) {
  return (
    <article className="group reveal overflow-hidden border border-red-100/15 bg-black/35 shadow-[inset_0_0_24px_rgba(255,77,61,0.045)] transition duration-300 hover:-translate-y-1 hover:border-red-100/35 hover:shadow-[0_0_42px_rgba(255,77,61,0.13)]">
      <div className="relative aspect-[0.82] overflow-hidden">
        <Image
          src={hero.src}
          alt={`${hero.name} hero artwork`}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${hero.accent} via-void/10 to-transparent`} />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-void to-transparent" />
      </div>
      <div className="p-4">
        <h3 className="promo-card-title text-sm uppercase tracking-[0.18em] text-white">
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
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_24%_34%,rgba(255,77,61,0.13),transparent_28rem),radial-gradient(circle_at_78%_46%,rgba(255,28,20,0.12),transparent_26rem)]" />
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
            Instants, companions, and Energy paths you can bring into combat.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ["Hero", "sets the plan"],
              ["Deck", "splits the plan"],
              ["Packs", "expand options"],
            ].map(([value, label]) => (
              <div key={value} className="tactical-tile border border-white/10 p-4">
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-red-100">
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
          <div className="absolute left-1/2 top-[47%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/14 blur-3xl" />
          <div className="absolute left-[5%] top-6 w-[50%] max-w-[350px] rotate-[-7deg] drop-shadow-[0_42px_90px_rgba(255,77,61,0.28)] transition duration-500 hover:-translate-y-3 hover:rotate-[-3deg]">
            <Image
              src="/art/pack-mythic-red-transparent.png"
              alt="Old Rock Fragment Mythic Pack"
              width={1024}
              height={1536}
              className="h-auto w-full"
            />
          </div>
          <div className="absolute right-[3%] top-20 w-[48%] max-w-[340px] rotate-[7deg] drop-shadow-[0_42px_90px_rgba(255,77,61,0.18)] transition duration-500 hover:-translate-y-3 hover:rotate-[3deg]">
            <Image
              src="/art/pack-core-blue-transparent.png"
              alt="Old Rock Fragment card pack"
              width={1024}
              height={1536}
              className="h-auto w-full"
            />
          </div>
          <div className="absolute bottom-8 left-1/2 w-[78%] -translate-x-1/2 border border-red-100/20 bg-void/80 p-4 text-center text-xs uppercase tracking-[0.22em] text-slate-300 backdrop-blur">
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
          <div key={second} className="relative min-h-14 border-r border-white/10 bg-white/[0.03] p-3 last:border-r-0">
            <span className="text-xs font-semibold text-cyan-100">{second}</span>
            <span className="absolute inset-x-3 bottom-3 h-px bg-cyan-100/30" />
          </div>
        ))}
      </div>
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {timelineExamples.map((example) => (
          <div key={example.label} className="border border-white/10 bg-void/50 p-4">
            <div className="mb-4">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                {example.label}
              </div>
              <div className="mt-1 font-title text-base text-white">{example.title}</div>
            </div>
            <div className="flex min-h-20 overflow-hidden border border-white/10 bg-black/20">
              {example.actions.map((action) => (
                <div
                  key={`${example.label}-${action.name}`}
                  className={`${action.className} relative flex min-w-0 flex-col justify-between border-r border-white/10 p-3 last:border-r-0`}
                  style={{ width: `${(action.seconds / 6) * 100}%` }}
                  aria-label={`${action.name}, ${action.seconds} seconds`}
                >
                  <span className="font-title text-[11px] uppercase leading-4 tracking-[0.12em] text-white">
                    {action.name}
                  </span>
                  <span className="w-fit border border-cyan-100/25 bg-void/45 px-2 py-1 text-[10px] font-semibold uppercase leading-none tracking-normal text-cyan-100">
                    {action.seconds}s
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between gap-3 border border-cyan-100/15 bg-cyan-100/[0.045] px-3 py-2">
              <span className="text-[11px] leading-5 text-slate-300">{example.result}</span>
              <span className="shrink-0 border border-cyan-100/25 bg-cyan-100/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan-100">
                6s spent
              </span>
            </div>
            <div className="mt-3 grid grid-cols-6 gap-1">
              {example.actions.map((action) => (
                <div
                  key={`${example.label}-${action.name}-seconds`}
                  className={`h-1.5 ${action.className}`}
                  style={{ gridColumn: `span ${action.seconds} / span ${action.seconds}` }}
                  aria-hidden="true"
                />
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
            src="/art/hero-blue-female.webp"
            alt="Blue Runner hero card"
            width={760}
            height={760}
            className="aspect-[0.78] w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-void via-void/70 to-transparent p-4">
            <div className="font-title text-sm uppercase tracking-[0.2em] text-white">Blue Runner</div>
            <div className="mt-1 text-xs uppercase tracking-[0.16em] text-blue-100">Ice / Timing</div>
          </div>
        </div>
        <div className="grid gap-3">
          {[
            ["HP", "24", "survive pressure"],
            ["Initiative", "High", "acts first"],
            ["Base Attack", "3s / 2 dmg", "physical strike"],
            ["Instant", "Cold Snap", "priority access"],
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

function ThreadDemo() {
  const threadSteps = [
    {
      step: "1",
      name: "Frost Lock",
      note: "Freeze the next 3 seconds of the enemy Hero's plan.",
      type: "Ability",
      cost: {
        seconds: 3,
        colored: [
          {
            icon: Snowflake,
            className: "border-blue-100/55 bg-blue-500 text-blue-50",
            label: "Blue Energy",
          },
          {
            icon: Snowflake,
            className: "border-blue-100/55 bg-blue-500 text-blue-50",
            label: "Blue Energy",
          },
        ],
      },
      effect: "Enemy Hero's next action loses 3 seconds of timing.",
      accent: "border-blue-200/30 bg-blue-400/10",
      flux: false,
    },
    {
      step: "2",
      name: "Thaw Pulse",
      note: "Opponent plays an Instant to keep their next action from losing seconds.",
      type: "Instant",
      cost: { flux: true, colorless: 1 },
      effect: "Prevent the next 2 seconds of timing loss.",
      accent: "border-amber-100/30 bg-amber-200/10",
      flux: true,
    },
    {
      step: "3",
      name: "Cold Snap",
      note: "You answer with an Instant: make the freeze effect stick.",
      type: "Instant",
      cost: { flux: true, colorless: 1 },
      effect: "Remove timing prevention from one Thread effect.",
      accent: "border-cyan-100/30 bg-cyan-100/10",
      flux: true,
    },
  ];
  const resolveSteps = [
    ["Cold Snap resolves", "Thaw Pulse loses its timing prevention."],
    ["Thaw Pulse resolves", "No prevention remains to protect the action."],
    ["Frost Lock resolves", "The enemy Hero loses 3 seconds of timing."],
  ];
  const instantWindows = [
    ["Proactive", "start pressure on your turn"],
    ["Interrupt", "answer an action as it appears"],
    ["Reaction", "respond while the Thread is open"],
  ];

  return (
    <div className="fracture-panel reveal p-5 sm:p-6 lg:col-span-7">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-100/70">
            Thread and Instants
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Play with priority, resolve backward</h3>
        </div>
        <div className="border border-amber-200/30 bg-amber-200/10 px-3 py-2">
          <FluxBadge label="Instant" />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-[1fr_0.22fr_1fr] md:items-center">
        <div className="space-y-3">
          {threadSteps.map((card, index) => (
            <div
              key={card.name}
              className={`group/card relative border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-100/35 ${card.flux ? "flux-ready border-amber-100/25" : ""}`}
              style={{ marginLeft: `${index * 12}px` }}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
                  <span className="block">Thread</span>
                  <span className="mt-1 block text-[10px] tracking-[0.18em] text-slate-500">
                    Play 0{card.step}
                  </span>
                </span>
                <div className={`flex w-full items-center justify-between gap-2 border px-3 py-2 sm:w-auto sm:min-w-44 ${card.accent}`}>
                  <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-100">
                    {card.flux ? <Bolt className="size-3 text-amber-100" /> : <Layers3 className="size-3 text-slate-400" />}
                    {card.type}
                  </span>
                  <CostPips cost={card.cost} />
                </div>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-[0.8fr_1fr]">
                <div>
                  <div className="font-title text-lg text-white">{card.name}</div>
                  <div className="mt-2 text-xs leading-5 text-slate-400">{card.note}</div>
                </div>
                <div className={`border px-3 py-3 ${card.accent}`}>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Effect
                  </div>
                  <div className="mt-2 text-xs leading-5 text-slate-300">{card.effect}</div>
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
        {instantWindows.map(([window, note]) => (
          <div key={window} className="border border-amber-100/20 bg-amber-200/[0.06] p-3">
            <div className="mb-2 flex items-center justify-between">
              <Bolt className="size-4 text-amber-100" />
              <span className="text-[10px] uppercase tracking-[0.18em] text-amber-100/70">
                Instant
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
  const usedPermanents = [
    { name: "Hero", note: "stays upright", icon: Shield, className: "border-cyan-100/25 bg-cyan-100/10", used: false },
    { name: "Energy", note: "used", icon: Gem, className: "border-cyan-100/25 bg-cyan-100/10", used: true },
    { name: "Relic", note: "used", icon: Gem, className: "border-amber-100/25 bg-amber-200/10", used: true },
    { name: "Ally", note: "used", icon: Orbit, className: "border-emerald-100/25 bg-emerald-200/10", used: true },
  ];

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
      <div className="fracture-panel reveal p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-100/70">
              Used permanents
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white">Turn battlefield cards slightly right</h3>
          </div>
          <span className="border border-amber-100/25 bg-amber-200/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-100">
            Used
          </span>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {usedPermanents.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.name}
                className={`${card.className} min-h-28 border p-3 transition duration-300 ${card.used ? "rotate-[7deg]" : ""}`}
              >
                <Icon className="mb-5 size-5 text-cyan-100" />
                <div className="font-title text-sm uppercase tracking-[0.16em] text-white">
                  {card.name}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.14em] text-slate-500">
                  {card.note}
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-5 text-xs leading-6 text-slate-400">
          Energy, relics, and companions turn slightly right when used. Hero cards do not turn.
        </p>
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
          Card types define what enters the loop. The launch strains define how
          your Hero pressures or denies the fight.
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
              Beta strains
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
              Red vs Blue
            </span>
          </div>
          <div className="grid gap-2 lg:grid-cols-2">
            {launchIdentities.map((identity) => {
              const Icon = identity.icon;
              return (
                <div
                  key={identity.name}
                  className={`group min-h-32 border bg-gradient-to-br ${identity.className} to-white/[0.025] p-3 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]`}
                >
                  <div className="mb-6 flex items-center justify-between">
                    <Icon className="size-4 opacity-85" />
                    <span className="h-px w-8 bg-current opacity-30 transition-all duration-300 group-hover:w-12" />
                  </div>
                  <div className="font-title text-base text-white">{identity.name}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.14em] opacity-75">
                    {identity.signal}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-5 border border-white/10 bg-white/[0.03] p-3 text-xs uppercase tracking-[0.16em] text-slate-500">
        The beta asks one clean question: can Red pressure break through Blue
        timing before the six-second window closes?
      </div>
    </div>
  );
}

function GameplaySystems() {
  return (
    <section id="systems" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(255,77,61,0.11),transparent_30rem),radial-gradient(circle_at_82%_34%,rgba(255,35,28,0.1),transparent_28rem)]" />
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
            spend six seconds, place actions on the Thread, then use Instants
            whenever priority opens.
          </p>
        </div>
        <div className="mb-5 grid gap-3 sm:grid-cols-4">
          {[
            ["1", "Hero"],
            ["2", "Energy"],
            ["3", "Seconds"],
            ["4", "Thread"],
          ].map(([step, label]) => (
            <div key={label} className="tactical-tile border border-white/10 p-4">
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
          <ThreadDemo />
          <EnergyAndAttack />
          <CardsAndIdentity />
        </div>
      </div>
    </section>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-red-100/16 bg-void/78 shadow-[0_12px_45px_rgba(0,0,0,0.38)] backdrop-blur-xl">
      <nav className="container flex h-16 items-center justify-between">
        <a href="#hero" className="relative -my-2 block h-14 w-44 sm:w-48">
          <Image
            src="/art/fragment-nav-logo.png"
            alt="Fragment"
            fill
            priority
            sizes="192px"
            className="object-contain object-left drop-shadow-[0_0_18px_rgba(28,255,219,0.16)]"
          />
        </a>
        <div className="hidden items-center gap-7 text-xs font-medium uppercase tracking-[0.18em] text-slate-300 lg:flex">
          <a className="transition hover:text-red-100" href="#core">Game</a>
          <a className="transition hover:text-red-100" href="#heroes">Heroes</a>
          <a className="transition hover:text-red-100" href="#systems">Systems</a>
          <a className="transition hover:text-red-100" href="#infection">Strains</a>
          <a className="transition hover:text-red-100" href="#philosophy">World</a>
        </div>
        <a
          href="/early-access"
          className="border border-red-100/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-red-100 shadow-[inset_0_0_18px_rgba(255,77,61,0.06)] transition hover:bg-red-100 hover:text-void"
        >
          Early Access
        </a>
      </nav>
    </header>
  );
}

function DiscordMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 71 55" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M60.1 4.9A58.5 58.5 0 0 0 45.6.5a41 41 0 0 0-1.9 4A54.7 54.7 0 0 0 27.5 4c-.5-1.2-1.2-2.8-2-4A58 58 0 0 0 11 4.5C1.8 18.2-.7 31.5.6 44.6A58.9 58.9 0 0 0 18.4 54c1.4-1.9 2.7-3.9 3.8-6a37.8 37.8 0 0 1-6-2.9l1.5-1.2a41.9 41.9 0 0 0 35.7 0l1.5 1.2a38 38 0 0 1-6 2.9c1.1 2.1 2.4 4.1 3.8 6a58.8 58.8 0 0 0 17.8-9.4c1.5-15.2-2.5-28.3-10.4-39.7ZM23.7 36.5c-3.5 0-6.4-3.2-6.4-7.2s2.8-7.2 6.4-7.2c3.6 0 6.5 3.2 6.4 7.2 0 4-2.8 7.2-6.4 7.2Zm23.2 0c-3.5 0-6.4-3.2-6.4-7.2s2.8-7.2 6.4-7.2c3.6 0 6.5 3.2 6.4 7.2 0 4-2.8 7.2-6.4 7.2Z"
      />
    </svg>
  );
}

export function FragmentLanding() {
  return (
    <main className="fragment-page min-h-screen overflow-hidden">
      <Nav />

      <section id="hero" className="hero-game-scene relative isolate min-h-screen overflow-hidden pt-20">
        <Image
          src="/art/fragment-hero-game-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-bg-motion absolute inset-0 -z-30 object-cover object-center opacity-95"
        />
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_64%_45%,rgba(255,77,61,0.28),transparent_22rem),radial-gradient(circle_at_20%_12%,rgba(255,77,61,0.12),transparent_28rem)]" />
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-void/10 via-void/24 to-void lg:bg-gradient-to-r lg:from-void lg:via-void/58 lg:to-void/4" />
        <div className="absolute inset-x-0 bottom-0 -z-20 h-72 bg-gradient-to-t from-void via-void/70 to-transparent" />
        <div className="hero-noise absolute inset-0 -z-10" aria-hidden="true" />
        <div className="hero-embers absolute inset-0 -z-10" aria-hidden="true">
          {Array.from({ length: 18 }).map((_, index) => (
            <span
              key={index}
              style={{
                "--x": `${8 + ((index * 17) % 88)}%`,
                "--delay": `${(index % 9) * 0.45}s`,
                "--size": `${2 + (index % 4)}px`,
              } as CSSProperties}
            />
          ))}
        </div>
        <div className="container relative z-10 grid min-h-[calc(100vh-5rem)] items-center gap-10 pb-36 pt-10 lg:grid-cols-[0.82fr_1.18fr] lg:pb-44 lg:pt-16">
          <div className="relative z-20 max-w-3xl">
            <p className="hero-kicker mb-2 text-3xl font-black uppercase tracking-normal text-white sm:text-4xl">
              Everything
            </p>
            <h1 className="hero-title text-6xl font-black uppercase leading-none tracking-normal text-ember sm:text-8xl lg:text-[8.7rem]">
              Fragments
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-100 sm:text-2xl">
              A hero-based tactical deckbuilding card game where combat unfolds in six-second windows.
            </p>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              Build your deck around one Hero. Manage Energy. Spend seconds on
              decisive actions. Fight through Thread-based Instant interactions.
            </p>
            <div className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-3">
              {heroFeatureCallouts.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="hero-feature group">
                    <Icon className="size-6 text-ember transition duration-300 group-hover:scale-110" />
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ember">
                        {item.title}
                      </div>
                      <div className="mt-1 text-xs font-semibold uppercase leading-4 tracking-[0.14em] text-white">
                        {item.body}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <GameButton href="#core" variant="primary" size="lg" rightArrow>Explore the Game</GameButton>
              <GameButton href="/early-access" variant="secondary" size="lg" rightArrow>Join Early Access</GameButton>
            </div>
          </div>
          <div className="hero-visual relative z-10 min-h-[430px] sm:min-h-[540px] lg:min-h-[680px]">
            <div className="hero-red-slash absolute left-[8%] top-[43%] h-3 w-[88%] -rotate-[18deg] bg-ember/70 blur-sm" />
            <div className="hero-card-back absolute left-[-12%] top-[-8%] z-10 hidden w-[45%] max-w-[370px] origin-center opacity-55 blur-[2px] md:block lg:left-[-7%] lg:top-[-10%]">
              <Image
                src="/art/fragment-card-numbered-new.png"
                alt="Fragment numbered combat card drifting in the background"
                width={620}
                height={940}
                priority
                sizes="370px"
                className="w-full drop-shadow-[0_28px_80px_rgba(255,45,32,0.28)]"
              />
            </div>
            <div className="hero-throne-character pointer-events-none absolute bottom-[-17%] left-1/2 z-20 hidden w-[150%] max-w-[760px] opacity-95 drop-shadow-[0_42px_110px_rgba(255,45,32,0.38)] md:block lg:bottom-[-20%] lg:left-[52%] lg:w-[170%] lg:max-w-[860px]">
              <Image
                src="/art/hero-throne-character.png"
                alt=""
                width={1024}
                height={1024}
                priority
                sizes="470px"
                className="w-full"
              />
            </div>
            <div className="hero-floating-card group absolute right-[-58%] top-[12%] z-30 w-[198%] max-w-[1500px] origin-center transition duration-500 sm:right-[-54%] lg:right-[-48%] lg:top-[10%] lg:w-[190%]">
              <Image
                src="/art/fragment-momentum-hero-main.png"
                alt="Momentum Hero card floating in the foreground"
                width={1536}
                height={1024}
                priority
                sizes="(min-width: 1024px) 1500px, 198vw"
                className="hero-main-card-crop w-full drop-shadow-[0_42px_100px_rgba(255,45,32,0.45)] transition duration-500 group-hover:scale-[1.015]"
              />
            </div>
            <div className="hero-mini-card absolute bottom-[-1%] left-[6%] z-40 hidden w-24 -rotate-[8deg] overflow-hidden border border-red-100/30 bg-void/70 shadow-[0_18px_55px_rgba(255,77,61,0.24)] sm:block lg:bottom-[-4%] lg:left-[7%] lg:w-32">
              <Image
                src="/art/fragment-card-foreground-new.png"
                alt="Fragment red combat card in the lower hero scene"
                width={620}
                height={940}
                sizes="128px"
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="container absolute inset-x-0 bottom-6 z-20 hidden lg:block">
          <div className="grid overflow-hidden border border-white/10 bg-void/62 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur md:grid-cols-3">
            {heroPromoCards.map((card) => (
              <a
                key={card.title}
                href={card.title === "Join the Discord" ? "/early-access" : "#systems"}
                className="group relative min-h-32 overflow-hidden border-r border-white/10 p-5 last:border-r-0"
              >
                {card.src ? (
                  <>
                    <div className="absolute inset-y-0 left-0 -z-20 w-[143%] transition duration-500 group-hover:scale-[1.035]">
                      <Image
                        src={card.src}
                        alt=""
                        fill
                        sizes="560px"
                        className="object-cover opacity-90"
                      />
                    </div>
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/70 to-black/25" />
                  </>
                ) : card.icon === "discord" ? (
                  <div className={`absolute inset-0 -z-10 bg-gradient-to-r ${card.className} via-void/88 to-void`}>
                    <DiscordMark className="absolute right-7 top-1/2 size-24 -translate-y-1/2 text-[#5865f2] opacity-85 transition duration-300 group-hover:scale-105 group-hover:opacity-100" />
                  </div>
                ) : null}
                <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  {`// ${card.kicker}`}
                </div>
                <div className="promo-card-title mt-2 max-w-56 text-lg uppercase leading-6 text-white">
                  {card.title}
                </div>
                <div className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-ember">
                  {card.action}
                  <ArrowRight className="size-3 transition group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="container relative z-20 -mt-24 grid gap-3 pb-8 lg:hidden">
          {heroPromoCards.map((card) => (
            <a
              key={card.title}
              href={card.title === "Join the Discord" ? "/early-access" : "#systems"}
              className="group relative overflow-hidden border border-white/10 bg-void/72 p-4 backdrop-blur"
            >
              {card.src ? (
                <>
                  <div className="absolute inset-y-0 left-0 -z-20 w-[143%]">
                    <Image
                      src={card.src}
                      alt=""
                      fill
                      sizes="143vw"
                      className="object-cover opacity-90"
                    />
                  </div>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/70 to-black/25" />
                </>
              ) : card.icon === "discord" ? (
                <div className={`absolute inset-0 -z-10 bg-gradient-to-r ${card.className} via-void/88 to-void`}>
                  <DiscordMark className="absolute right-5 top-1/2 size-20 -translate-y-1/2 text-[#5865f2] opacity-85" />
                </div>
              ) : null}
              <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                {`// ${card.kicker}`}
              </div>
              <div className="promo-card-title mt-1 text-base uppercase text-white">{card.title}</div>
              <div className="mt-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-ember">
                {card.action}
                <ArrowRight className="size-3" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="core" className="container py-24">
        <SectionTitle
          eyebrow="Core Hook"
          title="A card game measured in seconds"
          body="Each turn gives your Hero 6 seconds. Every attack, ability, relic, or card takes time. Instants can be played whenever you have priority, opening tactical Thread exchanges."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {hooks.map((item) => <FeatureCard key={item.title} item={item} />)}
        </div>
      </section>

      <PackShowcase />

      <section id="heroes" className="container py-24">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div className="reveal">
            <p className="tactical-kicker mb-3 text-xs font-semibold uppercase tracking-[0.34em]">
              Beta Heroes
            </p>
            <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-5xl">
              Build around a single fractured combatant
            </h2>
          </div>
          <p className="reveal max-w-2xl text-base leading-8 text-slate-300 lg:justify-self-end">
            The first beta focuses on Red and Blue. Every deck begins with one
            Hero, then sharpens around pressure, timing, durability, and
            battlefield readability.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_65%_24%,rgba(255,77,61,0.22),transparent_28rem),linear-gradient(to_bottom,rgba(5,6,8,0.98),rgba(5,6,8,0.75),#050608)]" />
        <div className="container">
          <SectionTitle
            eyebrow="Beta Identities"
            title="The first two stabilized Fragments"
            body="The beta opens with Red pressure against Blue timing: a focused duel built to prove seconds, Thread interaction, and Hero combat readability."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {launchIdentities.map((identity) => {
              const Icon = identity.icon;
              return (
                <article key={identity.name} className={`reveal group min-h-72 border p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 ${identity.className}`}>
                  <div className="mb-10 flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center border border-current/30 bg-white/[0.035]">
                      <Icon className="size-5" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] opacity-60">
                      Stabilized
                    </span>
                  </div>
                  <h3 className="font-title text-3xl text-white">{identity.name}</h3>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] opacity-80">
                    {identity.signal}
                  </p>
                  <p className="mt-6 text-sm leading-7 text-slate-300">{identity.body}</p>
                </article>
              );
            })}
          </div>
          <div className="fracture-panel reveal mt-10 p-5 backdrop-blur">
            <div className="grid gap-6 lg:grid-cols-[0.7fr_1fr] lg:items-center">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                  Unstable Frequencies
                </p>
                <h3 className="text-2xl font-semibold text-white">Reality is still fragmenting</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Other Fragment types exist beneath the surface, but none are
                  cleared for public beta combat. Their marks remain classified,
                  unstable, and subject to change.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                {unstableFragments.map((fragment) => {
                  const Icon = fragment.icon;

                  return (
                    <div
                      key={fragment.mark}
                      className={`relative min-h-28 overflow-hidden border p-3 opacity-70 ${fragment.className}`}
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.08)_48%,transparent_52%)] opacity-50" />
                      <div className="relative flex items-center justify-between">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                          {fragment.mark}
                        </span>
                        <Icon className="size-4 text-slate-400 blur-[0.5px]" />
                      </div>
                      <div className="relative mt-8 h-px w-full bg-slate-500/25" />
                      <div className="relative mt-4 text-[10px] uppercase tracking-[0.18em] text-slate-500">
                        Classified
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
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
            animated Thread interactions, and fast matchmaking. The core rules are being
            designed with physical cards in mind, so the game can eventually become a
            paper TCG without needing to be redesigned from scratch.
          </p>
          <div className="relative hidden min-h-44 lg:block">
            <Image
              src="/art/fragment-relic.webp"
              alt=""
              width={760}
              height={1140}
              className="absolute -right-8 -top-20 h-72 w-auto rotate-12 opacity-90 drop-shadow-[0_24px_55px_rgba(255,77,61,0.2)]"
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
              Reality does not simply break. It specializes. Every Hero is a
              fragment of what they were, what they believe, and what the
              battlefield is forcing them to become.
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
        <div className="fracture-panel relative overflow-hidden p-8 sm:p-14 lg:min-h-[560px]">
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
            <Bolt className="mb-5 size-8 text-red-100" />
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
                <div key={title} className="tactical-tile border border-white/10 p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-red-100">
                    {title}
                  </div>
                  <div className="mt-2 text-sm leading-6 text-slate-400">{body}</div>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <GameButton href="/early-access" variant="primary" size="lg" rightArrow>Join Early Access</GameButton>
              <GameButton href="#systems" variant="secondary" size="lg" rightArrow>Read the Rules</GameButton>
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
