import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";

import type { Metadata } from "next";

import "@/styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meditation App",
};

export default function RootLayout({
  session,
  children,
}: {
  session: any;
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
