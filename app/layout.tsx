import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel the world with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
