import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Add or remove weights as needed
  variable: "--font-lexend", // Assign to a CSS variable
});

export const metadata: Metadata = {
  title: "Ian Valeta | Full Stack Web Developer",
  description:
    "Ian Valeta is recent college graduate looking to land his first full-time role in software development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lexend.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
