import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProviders } from '../theme-provider';
import '../globals.css';
import { getUser } from '@/utils/supabase/queries';
import { createClient } from '@/utils/supabase/server';
import NavBar from '@/src/components/NavBar';
import Footer from '@/src/components/Footer';

// const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();
  const user = await Promise.resolve(getUser(supabase));

  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProviders>
          <NavBar user={user} />
          {children}
          <Footer />
        </ThemeProviders>
      </body>
    </html>
  );
}
