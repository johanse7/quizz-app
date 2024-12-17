import { Navbar } from "@/components/navbar/Navbar";
import { Providers } from "@/components/providers";
import { rubik } from "@/config/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quiz App",
  description: "The most interest quiz thah you find",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${rubik.className}  antialiased`}>
        <Providers>
          <main className="container py-10">
            <Navbar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
