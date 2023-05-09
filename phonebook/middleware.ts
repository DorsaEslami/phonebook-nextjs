
import { withAuth } from "next-auth/middleware";
// import { NextRequest, NextResponse } from "next/server";

export default withAuth(
  // function middleware(req) {
  //   if (req.nextUrl.pathname.startsWith("/dashboard") && !req.nextauth.token) {
  //     return NextResponse.rewrite(new URL("/auth/login?message=You Are Not logged in!", req.url));
  //   }
  //   if (req.nextUrl.pathname.startsWith("/changePassword") && !req.nextauth.token) {
  //     return NextResponse.rewrite(new URL("/auth/login?message=You Are Not logged in!", req.url));
  //   }
  // },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*", "/changePassword"],
};