import { NextResponse } from 'next/server';
import { getStore } from '@netlify/blobs';

export async function POST(request) {
  try {
    const data = await request.json();
    const id = crypto.randomUUID();
    const store = getStore({ name: 'submissions', scope: 'app' });
    await store.setJSON(id, data);
    return NextResponse.json({ ok: true, id });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
