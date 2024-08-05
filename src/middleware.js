import { NextResponse } from "next/server";

export default function middleware(req) {
  const url = req.nextUrl.clone();
  const isVerified = req.cookies.get("loggedIn");

  // if (!isVerified) {
  //   if (url.pathname === "/login" || url.pathname === "/signup") {
  //     return NextResponse.next();
  //   }
  //   url.pathname = "/login";
  //   return NextResponse.redirect(url);
  // }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
