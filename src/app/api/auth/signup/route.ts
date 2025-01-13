import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "OK" });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.email || !body.password || !body.name) {
      return NextResponse.json(
        { error: "Missing email or password or name" },
        { status: 400 }
      );
    }
    const { email, password, name } = body;

    const res = await fetch(`${process.env.API_BASE_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    });

    const data = await res.json();

    return NextResponse.json(data, { status: res.status });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error in POST /api/auth/signup:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
