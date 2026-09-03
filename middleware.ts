import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(
  process.env.TERAPIAS_SECRET || "marroc-terapias-default-secret-change-me"
);

const protectedPaths = ["/terapias/terapiasclient/"];
const publicPaths = ["/terapias/login", "/terapias"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Só protege subpastas de terapiasclient, não a raiz
  const isProtected = protectedPaths.some(
    (p) => pathname.startsWith(p) && pathname.length > p.length
  );

  if (!isProtected) {
    return NextResponse.next();
  }

  // Permite a própria página de login
  if (publicPaths.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  const token = request.cookies.get("terapias-token")?.value;

  if (!token) {
    return redirectToLogin(request, pathname);
  }

  try {
    const { payload } = await jwtVerify(token, SECRET);
    const allowedSlug = payload.slug as string;

    const slug = pathname.replace("/terapias/terapiasclient/", "").split("/")[0];

    if (allowedSlug !== slug) {
      return redirectToLogin(request, pathname);
    }

    return NextResponse.next();
  } catch {
    return redirectToLogin(request, pathname);
  }
}

function redirectToLogin(request: NextRequest, from: string) {
  const url = request.nextUrl.clone();
  url.pathname = "/terapias/login";
  url.searchParams.set("from", from);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/terapias/:path*"],
};
