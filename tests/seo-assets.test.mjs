import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = path => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("SEO dependencies and generated assets are configured", async () => {
  const [packageJson, astroConfig, robotsRoute, layout] = await Promise.all([
    read("package.json").then(JSON.parse),
    read("astro.config.ts"),
    read("src/pages/robots.txt.ts"),
    read("src/layouts/Layout.astro"),
  ]);

  assert.equal(packageJson.dependencies["astro-seo"], "^1.1.0");
  assert.match(astroConfig, /site:\s*SITE\.website/);
  assert.match(astroConfig, /sitemap\(/);
  assert.match(robotsRoute, /Sitemap:\s*\$\{sitemapURL\.href\}/);
  assert.match(layout, /import\s+\{\s*SEO\s*\}\s+from\s+"astro-seo"/);
  assert.match(layout, /<SEO\b/);
  assert.match(layout, /const structuredData = pubDatetime\s*\?/);
  assert.match(layout, /structuredData &&/);
});
