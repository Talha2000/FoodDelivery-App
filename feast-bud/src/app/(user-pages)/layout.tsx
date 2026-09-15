import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Poppins } from "next/font/google";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { ThemeProviders } from "../theme-provider";
import "../globals.css";
// import { getUser } from '@/utils/supabase/queries';
// import { createClient } from '@/utils/supabase/server';
import NavBar from "@/src/components/NavBar";
import Footer from "@/src/components/Footer";
// const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "FeastBud | Better meals, made simple",
  description:
    "Discover practical recipes and fresh inspiration for every weeknight.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  // const supabase = createClient();
  // const user = await Promise.resolve(getUser(supabase));
  const session = await getServerSession(authOptions);
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProviders>
          <NavBar user={session?.user?.name} />
          {children}
          <Footer />
        </ThemeProviders>
      </body>
    </html>
  );
}
