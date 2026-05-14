import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Titan Strength | Elevate Performance',
  description: 'Premium gym equipment engineered for elite athletes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
