import { NextRequest } from "next/server";
import { jwtVerify } from "jose";
import { jwtDecode } from "jwt-decode";

export async function middleware(request: NextRequest) {
  console.log("middleware actioned");
  const { url, nextUrl, cookies } = request;
  console.log(cookies.get("session"));
  const { value: token } = cookies.get("session") ?? { value: null };

  const jwtSecret = new TextEncoder().encode(process.env.SECRET);
  let hasVerifiedToken = null;
  let userEmail = null;

  try {
    hasVerifiedToken = token && (await jwtVerify(token, jwtSecret));
  } catch (err) {
    console.error(err);
    hasVerifiedToken = null;
  }

  if (hasVerifiedToken && !nextUrl.pathname.startsWith("/mainPage")) {
    return Response.redirect(new URL("/mainPage", url));
  }

  if (!hasVerifiedToken && !nextUrl.pathname.startsWith("/")) {
    return Response.redirect(new URL("/", url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
