import { getStore } from '@netlify/blobs';
import { CLIMATES, PERIODS, json, shanghaiDate, shanghaiPeriod } from './shared.mjs';

export default async function handler(req) {
  if (req.method !== 'GET') return json({ error: 'Method not allowed' }, 405, { Allow: 'GET' });

  try {
    const date = shanghaiDate();
    const store = getStore('moodcast-observations');
    const blobs = [];
    let cursor;
    do {
      const page = await store.list({ prefix: `${date}/`, cursor });
      blobs.push(...page.blobs);
      cursor = page.cursor;
    } while (cursor);
    const counts = Object.fromEntries([...CLIMATES].map(key => [key, 0]));
    const periods = Object.fromEntries([...PERIODS].map(period => [period, {
      total: 0,
      counts: Object.fromEntries([...CLIMATES].map(key => [key, 0]))
    }]));

    for (const blob of blobs) {
      const parts = blob.key.split('/');
      const isCurrentFormat = PERIODS.has(parts[1]);
      const period = isCurrentFormat ? parts[1] : null;
      const climate = isCurrentFormat ? parts[2] : parts[1];
      if (CLIMATES.has(climate)) counts[climate] += 1;
      if (period && CLIMATES.has(climate)) {
        periods[period].total += 1;
        periods[period].counts[climate] += 1;
      }
    }

    const total = Object.values(counts).reduce((sum, count) => sum + count, 0);
    const top = Object.entries(counts)
      .filter(([, count]) => count > 0)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([climate, count]) => ({ climate, count, percentage: total ? Math.round(count / total * 100) : 0 }));

    const active = Object.entries(counts)
      .filter(([, count]) => count > 0)
      .sort((a, b) => a[1] - b[1]);
    const rarest = active.length ? {
      climate: active[0][0],
      count: active[0][1],
      percentage: total ? Math.round(active[0][1] / total * 100) : 0
    } : null;
    const currentPeriod = shanghaiPeriod();
    const periodSummary = Object.fromEntries(Object.entries(periods).map(([period, data]) => {
      const leader = Object.entries(data.counts)
        .filter(([, count]) => count > 0)
        .sort((a, b) => b[1] - a[1])[0];
      return [period, {
        total: data.total,
        top: leader ? {
          climate: leader[0],
          count: leader[1],
          percentage: Math.round(leader[1] / data.total * 100)
        } : null
      }];
    }));

    return json({ date, total, counts, top, rarest, currentPeriod, periods: periodSummary });
  } catch {
    return json({ error: 'Service temporarily unavailable' }, 503);
  }
}
