import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Transformers Gym | Elite Fitness Experience',
  description: 'Premium gym facility engineered for elite athletes & personal transformation.',
  metadataBase: new URL("https://gym-zenxtara.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden bg-[#050505]">
        {children}
      </body>
    </html>
  );
}
