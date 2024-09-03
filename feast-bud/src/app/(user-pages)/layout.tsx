import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProviders } from "../theme-provider";
import "../globals.css";
import { getUser } from "@/utils/supabase/queries";
import { createClient } from "@/utils/supabase/server";
import NavBar from "@/src/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const supabase = createClient();
  const user = await Promise.resolve(getUser(supabase));
  console.log(user)
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProviders>
          <NavBar user={user}/>
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}
