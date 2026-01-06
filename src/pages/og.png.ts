import type { APIRoute } from "astro";
import { readFile } from "node:fs/promises";
import { SITE } from "@/config";

export const GET: APIRoute = async () => {
  // When dynamic OG is disabled or fonts are unavailable, serve a bundled fallback image.
  if (!SITE.dynamicOgImage) {
    const file = await readFile(new URL("../../public/astropaper-og.jpg", import.meta.url));
    return new Response(new Uint8Array(file), {
      headers: { "Content-Type": "image/jpeg" },
    });
  }

  const file = await readFile(new URL("../../public/astropaper-og.jpg", import.meta.url));
  return new Response(new Uint8Array(file), {
    headers: { "Content-Type": "image/jpeg" },
  });
};
