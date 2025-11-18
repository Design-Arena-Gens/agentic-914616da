import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "未来を紡ぐデジタルスタジオ",
  description:
    "先進的な体験と美しいデザインで、ブランドの価値を最大化するデジタルクリエイティブスタジオ。",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
