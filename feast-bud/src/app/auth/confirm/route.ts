import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const tokenHash = searchParams.get("token_hash");
  const type = searchParams.get("type");

  const redirectTo = request.nextUrl.clone();
  redirectTo.searchParams.delete("token_hash");
  redirectTo.searchParams.delete("type");

  if (tokenHash && type) {
    redirectTo.pathname = "/home";
    redirectTo.searchParams.delete("next");
    return NextResponse.redirect(redirectTo);
  }

  redirectTo.pathname = "/error";
  return NextResponse.redirect(redirectTo);
}
