import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  if (host.startsWith("dialogues.")) {
    const { pathname } = request.nextUrl;

    if (pathname === "/" || pathname === "") {
      return NextResponse.rewrite(new URL("/dialogues", request.url));
    }

    if (
      !pathname.startsWith("/dialogues") &&
      !pathname.startsWith("/_next") &&
      pathname !== "/favicon.ico"
    ) {
      return NextResponse.rewrite(new URL("/dialogues", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
