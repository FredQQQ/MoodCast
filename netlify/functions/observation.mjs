import { getStore } from '@netlify/blobs';
import { CLIMATES, MODES, json, readSmallJSON, shanghaiDate, shanghaiPeriod, validClientId } from './shared.mjs';

export default async function handler(req) {
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405, { Allow: 'POST' });

  try {
    const body = await readSmallJSON(req);
    if (!validClientId(body.clientId) || !CLIMATES.has(body.climate) || !MODES.has(body.mode)) {
      return json({ error: 'Invalid observation' }, 400);
    }

    const date = shanghaiDate();
    const period = shanghaiPeriod();
    const key = `${date}/${period}/${body.climate}/${body.mode}/${body.clientId}`;
    const store = getStore('moodcast-observations');
    await store.setJSON(key, { createdAt: new Date().toISOString(), period, version: 2 }, { onlyIfNew: true });
    return json({ ok: true, date, period }, 201);
  } catch (error) {
    const badRequest = ['PAYLOAD_TOO_LARGE','INVALID_CONTENT_TYPE','SyntaxError'].includes(error?.message) || error instanceof SyntaxError;
    return json({ error: badRequest ? 'Invalid request' : 'Service temporarily unavailable' }, badRequest ? 400 : 503);
  }
}
