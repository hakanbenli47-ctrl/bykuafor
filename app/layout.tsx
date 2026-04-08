import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bywillybelekkuafor.com.tr"),

  title: {
    default: "Belek Kuaför | By Willy Coiffeur",
    template: "%s | By Willy Coiffeur",
  },

  description:
    "Belek kuaför arıyorsanız By Willy Coiffeur. Erkek ve kadın kuaförü, saç kesimi, boya ve bakım hizmetleri. Antalya Belek’te profesyonel berber ve hairdresser.",

  keywords: [
    "belek kuaför",
    "belek erkek kuaförü",
    "belek bayan kuaförü",
    "antalya belek kuaför",
    "belek berber",
    "belek barber shop",
    "belek hairdresser",
    "belek coiffeur",
    "belek saç kesimi",
    "belek saç boyama"
  ],

  openGraph: {
    title: "Belek Kuaför | By Willy Coiffeur",
    description:
      "Antalya Belek’te profesyonel erkek ve kadın kuaförü. Saç kesimi, boya ve bakım hizmetleri.",
    url: "https://bywillybelekkuafor.com.tr",
    siteName: "By Willy Coiffeur",
    locale: "tr_TR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "C4lVpOos9MH1BXLCpSB7b8gpvHHXK0q-yCgd1O0tJvY",
  },
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