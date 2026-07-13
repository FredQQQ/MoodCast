import { getStore } from '@netlify/blobs';
import { CLIMATES, FEEDBACK, MODES, json, readSmallJSON, shanghaiDate, validClientId } from './shared.mjs';

export default async function handler(req) {
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405, { Allow: 'POST' });

  try {
    const body = await readSmallJSON(req);
    if (!validClientId(body.clientId) || !CLIMATES.has(body.climate) || !MODES.has(body.mode) || !FEEDBACK.has(body.feedback)) {
      return json({ error: 'Invalid feedback' }, 400);
    }

    const date = shanghaiDate();
    const key = `${date}/${body.climate}/${body.mode}/${body.feedback}/${body.clientId}`;
    const store = getStore('moodcast-feedback');
    await store.setJSON(key, { createdAt: new Date().toISOString(), version: 1 }, { onlyIfNew: true });
    return json({ ok: true }, 201);
  } catch (error) {
    const badRequest = ['PAYLOAD_TOO_LARGE','INVALID_CONTENT_TYPE'].includes(error?.message) || error instanceof SyntaxError;
    return json({ error: badRequest ? 'Invalid request' : 'Service temporarily unavailable' }, badRequest ? 400 : 503);
  }
}
