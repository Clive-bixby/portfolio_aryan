import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Aryan Yadav | Software Engineer Portfolio",
    template: "%s | Aryan Yadav"
  },
  description:
    "Aryan Yadav is a Full Stack Software Engineer building scalable web products with Node.js, React, TypeScript, Django, PostgreSQL, MongoDB, Cloud, and AI-powered systems.",
  keywords: [
    "Aryan Yadav",
    "Full Stack Engineer",
    "Software Engineer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Django",
    "PostgreSQL",
    "MongoDB",
    "Cloud",
    "AI products"
  ],
  authors: [{ name: "Aryan Yadav", url: siteConfig.url }],
  creator: "Aryan Yadav",
  publisher: "Aryan Yadav",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Aryan Yadav | Software Engineer Portfolio",
    description:
      "Premium portfolio for a Full Stack Engineer focused on scalable web products, backend systems, cloud deployment, and AI-integrated products.",
    url: siteConfig.url,
    siteName: "Aryan Yadav Portfolio",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Yadav | Software Engineer Portfolio",
    description:
      "Full Stack Engineer building scalable web products with modern frontend, backend, cloud, and AI systems."
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
