import { NextRequest, NextResponse } from "next/server";
import Config from "./utils/config";
import { jwtVerify } from "jose";
import { COOKIE_AUTH } from "./constants/cookie";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get(COOKIE_AUTH)?.value;
  const pathname = request.nextUrl.pathname;
  const isAuthPage =
    pathname.startsWith("/auth/signin") || pathname.startsWith("/auth/signup");

  if (token) {
    try {
      await jwtVerify(token, new TextEncoder().encode(Config.JWT_SECRET));
      if (isAuthPage) {
        /* prevent user from accessing auth pages after logging in */
        return NextResponse.redirect(new URL("/dashboard", request.url));
      }
      return NextResponse.next();
    } catch (err) {
      console.error({ err });
      return NextResponse.redirect(new URL("/auth/signin", request.url));
    }
  }

  if (!token && isAuthPage) return NextResponse.next();

  if (!token) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }
}

// on which routes the middleware is run
export const config = {
  matcher: ["/auth/signin", "/auth/signup", "/dashboard"],
};
