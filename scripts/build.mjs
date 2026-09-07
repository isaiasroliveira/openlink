import { cp } from "node:fs/promises";

// Publish only site assets, never project configuration or internal notes.
for (const file of ["index.html", "404.html", "style.css", "assets"]) {
  await cp(new URL(`../${file}`, import.meta.url), new URL(`../dist/${file}`, import.meta.url), { recursive: true });
}
