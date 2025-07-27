import { NextResponse } from 'next/server';
export const runtime = 'edge';

export async function POST(request) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({ error: 'OPENAI_API_KEY not set in env' }, { status: 500 });
  }
  const { prompt } = await request.json();
  const payload = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
    max_tokens: 400,
  };
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  return NextResponse.json({ text: data.choices?.[0]?.message?.content ?? '' });
}
