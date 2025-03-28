import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const NunitoSans = Nunito_Sans({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Кабинет компании",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={NunitoSans.className}>{children}</body>
    </html>
  );
}
