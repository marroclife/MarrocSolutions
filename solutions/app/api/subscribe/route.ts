import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.formData();
  const email = data.get("email");
  // TODO: integrar ConvertKit/EmailOctopus
  console.log("New subscriber:", email);
  return NextResponse.redirect(new URL("/newsletter?ok=1", req.url));
}
