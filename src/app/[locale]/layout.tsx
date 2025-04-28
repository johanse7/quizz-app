import { Navbar } from "@/components/navbar/Navbar";
import { Providers } from "@/components/providers";
import { rubik } from "@/config/fonts";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "../globals.css";

export const metadata: Metadata = {
  title: "Quiz App",
  description: "The most interest quiz that you find",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${rubik.className}  antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <main className="container py-10">
              <Navbar />
              {children}
            </main>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
