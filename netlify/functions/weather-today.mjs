import { getStore } from '@netlify/blobs';
import { CLIMATES, json, shanghaiDate } from './shared.mjs';

export default async function handler(req) {
  if (req.method !== 'GET') return json({ error: 'Method not allowed' }, 405, { Allow: 'GET' });

  try {
    const date = shanghaiDate();
    const store = getStore('moodcast-observations');
    const { blobs } = await store.list({ prefix: `${date}/` });
    const counts = Object.fromEntries([...CLIMATES].map(key => [key, 0]));

    for (const blob of blobs) {
      const climate = blob.key.split('/')[1];
      if (CLIMATES.has(climate)) counts[climate] += 1;
    }

    const total = Object.values(counts).reduce((sum, count) => sum + count, 0);
    const top = Object.entries(counts)
      .filter(([, count]) => count > 0)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([climate, count]) => ({ climate, count, percentage: total ? Math.round(count / total * 100) : 0 }));

    return json({ date, total, counts, top });
  } catch {
    return json({ error: 'Service temporarily unavailable' }, 503);
  }
}
