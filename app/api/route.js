import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://api.npoint.io/2e8b874cb210e4d800bc", {
    next: {
      revalidate: 60,
    },
  });
  const data = await res.json();

  return NextResponse.json({ data });
}
