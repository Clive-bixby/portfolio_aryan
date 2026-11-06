import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk, Syne } from "next/font/google";
import { siteConfig } from "@/lib/seo";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Aryan Yadav | Full-Stack Software Engineer",
    template: "%s | Aryan Yadav"
  },
  description:
    "Aryan Yadav is a Full-Stack Software Engineer (IIT Roorkee '24) building scalable web and AI-powered applications with React, Node.js/Express, Django, PostgreSQL, and RAG pipelines.",
  keywords: [
    "Aryan Yadav",
    "Full Stack Software Engineer",
    "Software Engineer",
    "React",
    "Node.js",
    "Express",
    "TypeScript",
    "Django",
    "PostgreSQL",
    "pgvector",
    "RAG",
    "Next.js"
  ],
  authors: [{ name: "Aryan Yadav", url: siteConfig.url }],
  creator: "Aryan Yadav",
  publisher: "Aryan Yadav",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Aryan Yadav | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer building scalable web and AI-powered applications — REST APIs, cloud deployment, vector databases, and production-grade backends.",
    url: siteConfig.url,
    siteName: "Aryan Yadav Portfolio",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Yadav | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer building scalable web and AI-powered applications."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  category: "technology",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${syne.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
