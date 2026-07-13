import { getStore } from '@netlify/blobs';
import { CLIMATES, MODES, json, readSmallJSON, shanghaiDate, validClientId } from './shared.mjs';

export default async function handler(req) {
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405, { Allow: 'POST' });

  try {
    const body = await readSmallJSON(req);
    if (!validClientId(body.clientId) || !CLIMATES.has(body.climate) || !MODES.has(body.mode)) {
      return json({ error: 'Invalid observation' }, 400);
    }

    const date = shanghaiDate();
    const key = `${date}/${body.climate}/${body.mode}/${body.clientId}`;
    const store = getStore('moodcast-observations');
    await store.setJSON(key, { createdAt: new Date().toISOString(), version: 1 }, { onlyIfNew: true });
    return json({ ok: true, date }, 201);
  } catch (error) {
    const badRequest = ['PAYLOAD_TOO_LARGE','INVALID_CONTENT_TYPE','SyntaxError'].includes(error?.message) || error instanceof SyntaxError;
    return json({ error: badRequest ? 'Invalid request' : 'Service temporarily unavailable' }, badRequest ? 400 : 503);
  }
}
