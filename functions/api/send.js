export async function onRequestPost({ request, env }) {
  const { content, nickname } = await request.json();
  await env.DB.prepare("INSERT INTO messages (content, nickname) VALUES (?, ?)").bind(content, nickname).run();
  return new Response("OK");
}
