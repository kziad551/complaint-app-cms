export default async function handler(req, res) {
  const { createServer } = await import('@directus/server');
  const directus = await createServer();
  await directus.start();
  res.status(200).send('Directus is running');
}
