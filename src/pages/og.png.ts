import type { APIRoute } from "astro";
export const GET: APIRoute = async () => {
  return new Response("OG disabled", { status: 404 });
};
