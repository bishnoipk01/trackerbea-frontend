import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "OK" });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.email || !body.password) {
      return NextResponse.json(
        { error: "Missing email or password" },
        { status: 400 }
      );
    }
    const { email, password } = body;

    const res = await fetch(`${process.env.API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    return NextResponse.json(data, { status: res.status });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error in POST /api/auth/login:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
