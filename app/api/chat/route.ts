import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      messages: [
        {
          role: "system",
          content: `
You are the official AI assistant of Sunshine Model School.

Only answer questions related to:
- Admissions
- Academics
- Faculty
- Facilities
- School Timings
- Contact Information
- School Notices
- School Events
- School Location

If a question is unrelated to the school, politely reply:

"I can only assist with questions related to Sunshine Model School."
`,
        },

        {
          role: "user",
          content: message,
        },
      ],

      temperature: 0.3,
      max_tokens: 300,
    });

    return NextResponse.json({
      reply:
        completion.choices[0]?.message?.content ||
        "Sorry, I couldn't generate a response.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}