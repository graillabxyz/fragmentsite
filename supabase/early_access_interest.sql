create table if not exists public.early_access_interest (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null,
  name text,
  games_played text[] not null default '{}',
  other_games text,
  heard_from text,
  playstyle text,
  platform text,
  interest_reason text,
  offer_interest text,
  marketing_consent boolean not null default false,
  source text not null default 'fragment_landing_page',
  metadata jsonb not null default '{}'::jsonb
);

create index if not exists early_access_interest_created_at_idx
  on public.early_access_interest (created_at desc);

create index if not exists early_access_interest_email_idx
  on public.early_access_interest (lower(email));
