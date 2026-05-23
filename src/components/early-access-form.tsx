"use client";

import { useState } from "react";
import { ArrowRight, Loader2, Zap } from "lucide-react";

const games = [
  "MTG Arena",
  "Marvel Snap",
  "Hearthstone",
  "Legends of Runeterra",
  "Yu-Gi-Oh!",
  "Pokemon TCG",
  "Flesh and Blood",
  "Slay the Spire",
  "Other tabletop TCGs",
];

const heardFromOptions = [
  "Friend or community",
  "Discord",
  "TikTok / Shorts",
  "YouTube",
  "Reddit",
  "X / Twitter",
  "Convention or event",
  "Search",
  "Other",
];

export function EarlyAccessForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const formData = new FormData(event.currentTarget);

    const payload = {
      email: String(formData.get("email") ?? ""),
      name: String(formData.get("name") ?? ""),
      gamesPlayed: String(formData.get("gamesPlayed") ?? "")
        .split(",")
        .map((game) => game.trim())
        .filter(Boolean),
      otherGames: String(formData.get("otherGames") ?? ""),
      heardFrom: String(formData.get("heardFrom") ?? ""),
      interestReason: String(formData.get("interestReason") ?? ""),
      marketingConsent: formData.get("marketingConsent") === "on",
    };

    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "Something went wrong.");
      }

      setStatus("success");
      setMessage("You are on the list. Watch for the first fracture signal.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Could not join early access.");
    }
  }

  return (
    <form
      onSubmit={submitForm}
      className="border border-cyan-100/20 bg-void/82 p-5 shadow-[0_28px_80px_rgba(0,0,0,0.28)] backdrop-blur-md sm:p-6"
    >
      <div className="mb-5 border border-amber-100/20 bg-amber-200/[0.06] p-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-amber-100">
          <Zap className="size-4" />
          First Fracture Access
        </div>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          Early joiners may receive priority invite waves, founder cosmetic identity,
          and early rules/playtest access. No pay-to-win advantage.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Email
          </span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="mt-2 w-full border border-white/10 bg-white/[0.04] px-3 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-100/50"
            placeholder="you@example.com"
          />
        </label>
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Name or handle
          </span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            className="mt-2 w-full border border-white/10 bg-white/[0.04] px-3 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-100/50"
            placeholder="Optional"
          />
        </label>
      </div>

      <div className="mt-4">
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            What do you already play?
          </span>
          <input
            name="gamesPlayed"
            type="text"
            list="fragment-games"
            className="mt-2 w-full border border-white/10 bg-white/[0.04] px-3 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-100/50"
            placeholder="MTG Arena, Marvel Snap, Commander, Slay the Spire..."
          />
          <datalist id="fragment-games">
            {games.map((game) => (
              <option key={game} value={game} />
            ))}
          </datalist>
        </label>
      </div>

      <label className="mt-3 block">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          Other games or communities
        </span>
        <input
          name="otherGames"
          type="text"
          className="mt-2 w-full border border-white/10 bg-white/[0.04] px-3 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-100/50"
          placeholder="Commander pods, locals, roguelike deckbuilders..."
        />
      </label>

      <div className="mt-4">
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            How did you hear?
          </span>
          <select
            name="heardFrom"
            className="mt-2 w-full border border-white/10 bg-[#0b1119] px-3 py-3 text-sm text-white outline-none transition focus:border-cyan-100/50"
            defaultValue=""
          >
            <option value="" disabled>
              Select one
            </option>
            {heardFromOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-4 block">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          What makes you want to test Fragment?
        </span>
        <textarea
          name="interestReason"
          rows={3}
          className="mt-2 w-full resize-none border border-white/10 bg-white/[0.04] px-3 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-100/50"
          placeholder="Stack play, hero decks, paper TCG potential, lore..."
        />
      </label>

      <label className="mt-4 flex items-start gap-3 text-xs leading-5 text-slate-400">
        <input
          name="marketingConsent"
          type="checkbox"
          className="mt-1 size-4 accent-cyan-100"
        />
        Send me Fragment early access updates, playtest invites, and founder reward news.
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 border border-cyan-200/60 bg-cyan-100 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-void transition hover:bg-white disabled:cursor-wait disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Joining
          </>
        ) : (
          <>
            Join Early Access
            <ArrowRight className="size-4" />
          </>
        )}
      </button>

      {message ? (
        <div
          className={`mt-4 border p-3 text-sm ${
            status === "success"
              ? "border-cyan-100/25 bg-cyan-100/10 text-cyan-50"
              : "border-red-300/25 bg-red-500/10 text-red-100"
          }`}
        >
          {message}
        </div>
      ) : null}
    </form>
  );
}
