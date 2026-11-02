import type { Metadata } from "next";
import Script from "next/script";
import { Inter_Tight, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const description = "Pyxarr | We build products and digital experiences that work, ship, and last — for founders and brands worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL("https://pyxarr-web.vercel.app"),
  title: {
    default: "Pyxarr | We Design. We Build. We Ship.",
    template: "%s | Pyxarr",
  },
  description,
  keywords: ["digital studio", "web design", "web development", "product development", "brand strategy", "mobile app development", "startup studio", "MVP development"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pyxarr-web.vercel.app",
    siteName: "Pyxarr",
    title: "Pyxarr | We Design. We Build. We Ship.",
    description,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Pyxarr" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pyxarr | We Design. We Build. We Ship.",
    description,
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", interTight.variable, "font-sans", geist.variable)}
    >
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Pyxarr",
              url: "https://pyxarr-web.vercel.app",
              logo: "https://pyxarr-web.vercel.app/android-chrome-512x512.png",
              description,
              email: "hello@pyxarr.com",
              foundingDate: "2024",
              areaServed: "Worldwide",
              sameAs: [
                "https://twitter.com/pyxarr",
                "https://instagram.com/pyxarr",
                "https://linkedin.com/company/pyxarr",
              ],
              serviceType: [
                "Web Design",
                "Web Development",
                "Product Development",
                "Brand Strategy",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}