import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ESGChain",
  description: "ESGChain is a blockchain platform for ESG data management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container px-4 py-6 mx-56">
          {children}
        </div>
      </body>
    </html>
  );
}
