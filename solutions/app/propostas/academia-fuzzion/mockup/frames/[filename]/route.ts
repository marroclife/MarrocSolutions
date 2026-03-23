import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const framesDir = path.join(
  process.cwd(),
  "app/propostas/academia-fuzzion/Fuzzion-Gym-Website/frames"
);

function isAllowedFrameName(filename: string) {
  return /^ezgif-frame-\d{3}\.jpg$/i.test(filename);
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  const { filename } = await params;

  if (!isAllowedFrameName(filename)) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const filePath = path.join(framesDir, filename);

  try {
    const buffer = fs.readFileSync(filePath);
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new NextResponse("Not Found", { status: 404 });
  }
}