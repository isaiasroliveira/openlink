import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const readProjectFile = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("the published page has essential metadata and landmarks", async () => {
  const html = await readProjectFile("index.html");

  assert.match(html, /<html lang="pt-BR">/);
  assert.match(html, /name="viewport"/);
  assert.match(html, /name="description"/);
  assert.match(html, /<main[^>]*id="profile"/);
  assert.match(html, /<nav[^>]*aria-label="Redes sociais"/);
  assert.match(html, /class="skip-link"/);
  assert.match(html, /rel="icon"/);
  assert.match(html, />IO<span>\.<\/span><\/a>/);
});

test("the favicon carries the current profile monogram", async () => {
  const favicon = await readProjectFile("assets/favicon.svg");

  assert.match(favicon, /<title>IO<\/title>/);
});

test("the deployment includes a branded way back from missing pages", async () => {
  const html = await readProjectFile("404.html");

  assert.match(html, /<meta name="robots" content="noindex"/);
  assert.match(html, /<a href="\/">Voltar ao perfil<\/a>/);
});

test("the portrait is accessible and available to the browser", async () => {
  const html = await readProjectFile("index.html");
  const image = await readFile(new URL("../assets/eu.png", import.meta.url));

  assert.match(html, /<img[^>]+src="assets\/eu\.png"[^>]+alt="Retrato de Isaias"/);
  assert.ok(image.byteLength > 100_000);
});

test("profile configuration contains safe, complete social links", async () => {
  const source = await readProjectFile("profile.js");
  const { profile } = await import(new URL("../profile.js", import.meta.url));

  assert.match(source, /export const profile/);
  assert.ok(profile.name.length > 1);
  assert.ok(profile.bio.length > 1);
  assert.ok(profile.links.length >= 3);
  assert.equal(profile.tag, null);

  for (const link of profile.links) {
    assert.ok(link.label.length > 1);
    assert.match(link.url, /^https:\/\//);
    assert.ok(link.icon.length > 1);
  }
});

test("the profile tag and link captions are optional", async () => {
  const html = await readProjectFile("index.html");
  const script = await readProjectFile("script.js");

  assert.match(html, /id="profile-tag"[^>]+hidden/);
  assert.match(script, /profile\.tag/);
  assert.match(script, /tagElement\.hidden = false/);
  assert.match(script, /social\.caption/);
});

test("external links receive safe new-tab attributes", async () => {
  const script = await readProjectFile("script.js");

  assert.match(script, /target = "_blank"/);
  assert.match(script, /rel = "noopener noreferrer"/);
});

test("the release version is recorded in package metadata and changelog", async () => {
  const packageJson = JSON.parse(await readProjectFile("package.json"));
  const changelog = await readProjectFile("CHANGELOG.md");

  assert.equal(packageJson.version, "1.1.0");
  assert.match(changelog, /## \[1\.1\.0\] - 2026-09-07/);
  assert.match(changelog, /## \[1\.0\.0\] - 2026-09-07/);
});
