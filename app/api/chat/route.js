import { NextResponse } from "next/server";

const ipRequestCounts = new Map();
const RATE_LIMIT = 10;
const WINDOW_TIME = 60 * 1000;

export async function POST(request) {
  const ip = request.headers.get("x-forwarded-for") || "unknown";

  const currentTime = Date.now();
  const userData = ipRequestCounts.get(ip);

  if (userData) {
    if (currentTime - userData.timestamp < WINDOW_TIME) {
      if (userData.count >= RATE_LIMIT) {
        return NextResponse.json(
          { message: "Too many requests. Please try again later." },
          { status: 429 }
        );
      } else {
        userData.count += 1;
        ipRequestCounts.set(ip, userData);
      }
    } else {
      ipRequestCounts.set(ip, { count: 1, timestamp: currentTime });
    }
  } else {
    ipRequestCounts.set(ip, { count: 1, timestamp: currentTime });
  }

  const { message } = await request.json();

  const keywords = [
    "tania", "shafiee", "your skills", "your experience", "your projects",
    "your resume", "your background", "your education", "what can you do",
    "who are you", "about you", "frontend", "react", "next.js", "portfolio"
  ];

  const isAboutTania = keywords.some(keyword =>
    message.toLowerCase().includes(keyword.toLowerCase())
  );

  if (!isAboutTania) {
    return NextResponse.json({
      message: "I can only answer questions about Tania Shafiee.",
    });
  }

  const bio = `
    Tania Shafiee is a passionate Front-End Developer with a strong focus on building responsive, user-friendly web applications.
    She is currently working as a Junior Developer at Hoshmand Sepehr.
    She specializes in React, Next.js, and Tailwind CSS.
    She has a deep understanding of JavaScript and TypeScript, and works with Redux and React Context API for state management.
    Tania is highly interested in UI/UX design and aims to create visually appealing and intuitive interfaces.
    She is committed to staying up-to-date with the latest front-end technologies.
    She is preparing to transition from a junior to a mid-level developer.
  `;

  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'openai/gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `You are a helpful assistant who only answers questions based on the following information about Tania Shafiee. 
                    You must not answer unrelated questions. Only respond if the answer is clearly available in the text below. 
                    Never make up information.
                    --- START OF PROFILE ---
                    ${bio}
                    --- END OF PROFILE ---
                  `
        },
        {
          role: 'user',
          content: message,
        },
      ],
    }),
  });

  const data = await res.json();
  return NextResponse.json(data);
}
