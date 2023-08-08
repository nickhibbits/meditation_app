import { Inter } from "next/font/google";

import type { Metadata } from "next";

import "@/styles/globals.scss";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meditation App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = null; // make request to /api/auth/current-user here or in getStaticProps function?
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
