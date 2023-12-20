import Header from '@/components/Header/Header';
import '@/common/styles/global.css';
import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import Footer from '@/components/Footer/Footer';

const mulish = Mulish({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Digital Agency',
  description: 'Digital Marketing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={mulish.className}>
        <link rel="icon" href="images/favicon-16x16.ico" sizes="16x16" />
        <link rel="icon" href="images/favicon-32x32.ico" sizes="32x32" />
        <link rel="icon" href="images/favicon-64x64.ico" sizes="64x64" />
        <link rel="icon" href="images/favicon-128x128.ico" sizes="128x128" />
        <link rel="icon" href="images/favicon-256x256.ico" sizes="256x256" />
        <link rel="icon" href="images/favicon-512x512.ico" sizes="512x512" />
        <link
          rel="apple-touch-icon"
          href="images/favicon-512x512.ico"
          sizes="any"
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
