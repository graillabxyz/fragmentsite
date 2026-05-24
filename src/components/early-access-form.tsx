"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown, Loader2, X, Zap } from "lucide-react";

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
  const [selectedGames, setSelectedGames] = useState<string[]>([]);
  const [gamesOpen, setGamesOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const availableGames = games.filter((game) => !selectedGames.includes(game));

  function addGame(game: string) {
    if (!game) {
      return;
    }

    setSelectedGames((current) => current.includes(game) ? current : [...current, game]);
    setGamesOpen(false);
  }

  function removeGame(game: string) {
    setSelectedGames((current) => current.filter((item) => item !== game));
  }

  async function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const formData = new FormData(event.currentTarget);

    const payload = {
      email: String(formData.get("email") ?? ""),
      name: String(formData.get("name") ?? ""),
      gamesPlayed: selectedGames,
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
      setSelectedGames([]);
      setGamesOpen(false);
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
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          What do you already play?
        </span>
        <div className="relative mt-2">
          <button
            type="button"
            onClick={() => setGamesOpen((open) => !open)}
            className="flex min-h-11 w-full items-center justify-between border border-white/10 bg-[#0b1119] px-3 py-3 text-left text-sm text-white outline-none transition hover:border-white/25 focus:border-cyan-100/50"
            aria-expanded={gamesOpen}
            aria-controls="game-picker-options"
          >
            <span className={selectedGames.length ? "text-white" : "text-slate-500"}>
              {availableGames.length ? "Add a game or community" : "All listed games added"}
            </span>
            <ChevronDown className={`size-4 text-slate-400 transition ${gamesOpen ? "rotate-180" : ""}`} />
          </button>
          {gamesOpen ? (
            <div
              id="game-picker-options"
              className="absolute inset-x-0 top-full z-30 mt-2 max-h-64 overflow-y-auto border border-cyan-100/20 bg-[#080d14] p-1 shadow-[0_24px_70px_rgba(0,0,0,0.45)]"
            >
              {availableGames.length ? (
                availableGames.map((game) => (
                  <button
                    key={game}
                    type="button"
                    onClick={() => addGame(game)}
                    className="block w-full px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-[0.12em] text-slate-300 transition hover:bg-cyan-100/10 hover:text-cyan-50"
                  >
                    {game}
                  </button>
                ))
              ) : (
                <div className="px-3 py-2.5 text-xs text-slate-500">
                  All listed games have been added.
                </div>
              )}
            </div>
          ) : null}
        </div>
        {selectedGames.length > 0 ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {selectedGames.map((game) => (
              <button
                key={game}
                type="button"
                onClick={() => removeGame(game)}
                className="inline-flex items-center gap-2 border border-cyan-100/25 bg-cyan-100/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-50 transition hover:border-cyan-100/45 hover:bg-cyan-100/15"
              >
                {game}
                <X className="size-3.5" />
              </button>
            ))}
          </div>
        ) : (
          <p className="mt-2 text-xs leading-5 text-slate-500">
            Add as many as apply. Use the field below for anything not listed.
          </p>
        )}
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
          placeholder="Thread play, hero decks, paper TCG potential, lore..."
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
