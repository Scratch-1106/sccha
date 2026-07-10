export async function onRequestGet({ env }) {
  const { results } = await env.DB.prepare("SELECT * FROM messages ORDER BY id DESC LIMIT 50").all();
  return new Response(JSON.stringify(results), { headers: { "Content-Type": "application/json" } });
}
