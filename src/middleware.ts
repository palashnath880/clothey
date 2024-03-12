import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const authRoutes = ["/login", "/register", "/forgot-password"];
  const protectedRoutes = ["/my-account", "/cart/checkout"];

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (authRoutes.find((i) => pathname.startsWith(i)) && token) {
    return NextResponse.redirect(new URL("/my-account", request.url));
  }

  if (protectedRoutes.find((i) => pathname.startsWith(i)) && !token) {
    return NextResponse.redirect(
      new URL(`/login?callbackUrl=${encodeURIComponent(pathname)}`, request.url)
    );
  }

  return NextResponse.next();
}

// export default withAuth(middleware, {
//   callbacks: { authorized: ({ token }) => Boolean(token) },
// });

// export default withAuth(function middleware(req) {
//   console.log(req.nextauth);
// });

// export const config = {
//   matcher: [
//     "/my-account/:path*",
//     "/cart/checkout/:path*",
//     "/login",
//     "/register",
//     "/forgot-password",
//   ],
// };
