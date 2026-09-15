import { NextResponse } from "next/server";
// import { getToken } from 'next-auth/jwt';
// import { cookies } from 'next/headers';

export function proxy() {
  return NextResponse.next();
  // const cookieStore = cookies();
  //   const cookie = cookieStore.get('selectedPlan');
  //   const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  //   if (token) {
  //     if (cookie) {
  //       return NextResponse.next();
  //     }
  //     return NextResponse.redirect(new URL('/pricing', req.url));
  //   }
  //   return NextResponse.redirect(new URL('/login', req.url));
  // }
}

export const config = {
  matcher: ["/"],
};
