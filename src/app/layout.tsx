import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agora",
  description: "Where people discover, vote, and elevate products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
      >
        <div className="container max-w-7xl mx-auto p-10">
          <header>Agora</header>
          {children}
          <footer>Agora Inc. All rights reserved.</footer>
        </div>
      </body>
    </html>
  );
}
