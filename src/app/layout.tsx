import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DSOP — Decision Style & Orientation of Poker",
  description:
    "ポーカーにおける意思決定傾向を可視化し、あなたを16タイプに分類する体験型診断",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Noto+Sans+JP:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
