import type { APIRoute } from "astro";
export async function getStaticPaths() {
  return [];
}

export const GET: APIRoute = async () => {
  return new Response("OG disabled", { status: 404 });
};
