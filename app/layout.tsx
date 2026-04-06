import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "By Willey Belek Kuaför ",
  description: "Belek'de 1 numaralı Saç Kesim İşlemi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}