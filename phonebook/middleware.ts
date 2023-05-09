import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    var booleanToken: boolean = !!req.nextauth.token?.token;
    if ((req.nextUrl.pathname.startsWith("/dashboard") || req.nextUrl.pathname.startsWith("/dashboard")) && !booleanToken)
      return NextResponse.rewrite(
        new URL("/", req.url)
      );
  },
);

export const config = {
  matcher: ["/dashboard/:path*", "/changePassword"],
};