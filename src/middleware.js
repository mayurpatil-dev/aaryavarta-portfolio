import { NextResponse } from "next/server";

export const config = {
  matcher: "/integrations/:path*",
};

export function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-createxyz-project-id", "9bdd6e5f-1020-4281-b1b9-583839fc0e95");
  requestHeaders.set("x-createxyz-project-group-id", "ff0e9379-1b88-4dca-a790-3063cdce8709");


  request.nextUrl.href = `https://www.create.xyz/${request.nextUrl.pathname}`;

  return NextResponse.rewrite(request.nextUrl, {
    request: {
      headers: requestHeaders,
    },
  });
}