export async function onRequestPost({ request, env }) {
  const { id, pass } = await request.json();
  const user = await env.DB.prepare("SELECT * FROM users WHERE id = ? AND password = ?").bind(id, pass).first();
  return user ? new Response("OK") : new Response("NG", { status: 401 });
}
