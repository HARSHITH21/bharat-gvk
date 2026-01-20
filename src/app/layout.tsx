import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bharat GVK Technologies | Electromechanical Products Manufacturer",
  description: "Bharat GVK Technologies - Leading manufacturers and importers of electromechanical products including BLDC Motors, Load Cells, Stepper Motors, PAB Bearings, and more. ISO 9001:2008 certified. Based in Hyderabad, India.",
  keywords: "BLDC Motors, Load Cells, Stepper Motors, PAB Bearings, Electromechanical Products, OEM Manufacturing, Hyderabad, India",
  authors: [{ name: "Bharat GVK Technologies" }],
  openGraph: {
    title: "Bharat GVK Technologies | Electromechanical Products Manufacturer",
    description: "Leading manufacturers and importers of electromechanical products. ISO 9001:2008 certified.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
