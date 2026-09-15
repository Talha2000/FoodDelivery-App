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

// import { type NextRequest } from 'next/server'
// import { updateSession } from '@/utils/supabase/middleware'

// export async function proxy(request: NextRequest) {
//   // update user's auth session
//   return await updateSession(request)
// }

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      * Feel free to modify this pattern to include more paths.
//      */
//     '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
//   ],
// }
