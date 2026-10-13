import type { Metadata, Viewport } from "next";
import { Lexend } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Ian Valeta",
    "studystate.us",
    "studystate",
    "college cost comparison",
    "Connecticut public colleges",
    "SUNY and CUNY costs",
    "Jobspank",
    "startup founder",
    "full stack web developer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "web developer portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_US",
    images: [{ url: site.image, width: 610, height: 726, alt: site.name }],
  },
  twitter: {
    card: "summary",
    title: site.title,
    description: site.description,
    images: [site.image],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#155dfc",
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
