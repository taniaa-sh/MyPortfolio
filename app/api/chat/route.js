import { NextResponse } from 'next/server'

export async function POST(request) {
  const { message } = await request.json()

  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'openai/gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'شما یک دستیار پشتیبان فارسی هستید.' },
        { role: 'user', content: message },
      ],
    }),
  })

  const data = await res.json()
  return NextResponse.json(data)
}
