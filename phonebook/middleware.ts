import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token?.token,
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*", "/changePassword"],
};