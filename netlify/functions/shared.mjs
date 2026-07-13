export const CLIMATES = new Set([
  'aurora','whirlwind','updraft','monsoon','golden','lazy','still','indoor',
  'sunshower','rainbow','recovery','fog','humid','storm','delay','fakeSun','mixed'
]);

export const MODES = new Set(['quick','standard','night']);
export const FEEDBACK = new Set(['no','some','yes']);

export function shanghaiDate() {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Shanghai', year: 'numeric', month: '2-digit', day: '2-digit'
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map(part => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

export function json(data, status = 200, extraHeaders = {}) {
  return Response.json(data, {
    status,
    headers: {
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
      ...extraHeaders
    }
  });
}

export async function readSmallJSON(req) {
  const length = Number(req.headers.get('content-length') || 0);
  if (length > 2048) throw new Error('PAYLOAD_TOO_LARGE');
  if (!req.headers.get('content-type')?.includes('application/json')) throw new Error('INVALID_CONTENT_TYPE');
  return req.json();
}

export function validClientId(value) {
  return typeof value === 'string' && /^[a-zA-Z0-9-]{16,64}$/.test(value);
}
