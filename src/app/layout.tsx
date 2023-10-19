import Header from "@/components/Header/Header";
import "@/common/styles/global.css";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Digital Marketing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <link rel="icon" href="images/logo.svg" sizes="any" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
