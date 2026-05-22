import { spawnSync } from "node:child_process";

const files = [
  "src/app/layout.tsx",
  "src/app/page.tsx",
  "src/components/fragment-landing.tsx",
];

for (const file of files) {
  const result = spawnSync(
    "/usr/local/bin/node",
    ["node_modules/eslint/bin/eslint.js", file],
    {
      env: {
        HOME: process.env.HOME ?? "",
        PATH: process.env.PATH ?? "",
        PWD: process.cwd(),
      },
      stdio: "inherit",
    },
  );

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}
