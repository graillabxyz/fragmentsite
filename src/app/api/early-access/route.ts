import { NextResponse } from "next/server";

type EarlyAccessPayload = {
  email?: string;
  name?: string;
  gamesPlayed?: string[];
  otherGames?: string;
  heardFrom?: string;
  playstyle?: string;
  platform?: string;
  interestReason?: string;
  offerInterest?: string;
  marketingConsent?: boolean;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanText(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function cleanList(value: unknown) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 12);
}

export async function POST(request: Request) {
  let payload: EarlyAccessPayload;

  try {
    payload = (await request.json()) as EarlyAccessPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = cleanText(payload.email, 160).toLowerCase();

  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
  }

  const supabaseUrl = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    process.env.SUPABASE_ANON_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const tableName = process.env.SUPABASE_EARLY_ACCESS_TABLE ?? "early_access_interest";

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json(
      { error: "Early access collection is not configured yet." },
      { status: 500 },
    );
  }

  const record = {
    email,
    name: cleanText(payload.name, 120),
    games_played: cleanList(payload.gamesPlayed),
    other_games: cleanText(payload.otherGames, 260),
    heard_from: cleanText(payload.heardFrom, 120),
    playstyle: cleanText(payload.playstyle, 120),
    platform: cleanText(payload.platform, 120),
    interest_reason: cleanText(payload.interestReason, 600),
    offer_interest: cleanText(payload.offerInterest, 160),
    marketing_consent: Boolean(payload.marketingConsent),
    source: "fragment_landing_page",
    metadata: {
      user_agent: request.headers.get("user-agent") ?? "",
      referrer: request.headers.get("referer") ?? "",
    },
  };

  const response = await fetch(`${supabaseUrl.replace(/\/$/, "")}/rest/v1/${tableName}`, {
    method: "POST",
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(record),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("Supabase early access insert failed", detail);

    return NextResponse.json(
      { error: "Could not save early access request." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
