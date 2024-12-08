import { NextRequest, NextResponse } from "next/server";
import Config from "./utils/config";
import { jwtVerify } from "jose";

const COOKIE_AUTH = "auth_token";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get(COOKIE_AUTH)?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  try {
    await jwtVerify(token, new TextEncoder().encode(Config.JWT_SECRET));
    return NextResponse.next();
  } catch (err) {
    console.error({ err });
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }
}

export const config = {
  matcher: ["/dashboard"],
};
