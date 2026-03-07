import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Add or remove weights as needed
  variable: "--font-lexend", // Assign to a CSS variable
});

export const metadata: Metadata = {
  title: "Ian Valeta | Full Stack Web Developer Premium Freelancer",
  description:
    "Ian Valeta is a full-stack web developer specializing in scalable, high-performance web apps, responsive websites, and SEO-optimized digital solutions. With 4+ years of experience, he crafts tailored web experiences to meet your business goals. Explore his services, pricing, and portfolio today!",
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
