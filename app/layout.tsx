import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://gotsuss.ai"),
  title: {
    default: "suss. — crowdsource your gut feeling",
    template: "%s | suss.",
  },
  description:
    "suss. helps you spot scams before they get you. submit screenshots, links, or listings and get a community‑driven read—fast.",
  openGraph: {
    title: "suss. — crowdsource your gut feeling",
    description:
      "suss. helps you spot scams before they get you. submit screenshots, links, or listings and get a community‑driven read—fast.",
    url: "https://gotsuss.ai",
    siteName: "suss.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "suss." }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "suss. — crowdsource your gut feeling",
    description:
      "suss. helps you spot scams before they get you. submit screenshots, links, or listings and get a community‑driven read—fast.",
    images: ["/og.jpg"],
  },
  icons: { icon: "/favicon.ico" },
  keywords: ["scam detector", "scam spotter", "marketplace safety", "community votes", "is it suss"],
  alternates: { canonical: "https://gotsuss.ai" },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "suss.",
    url: "https://gotsuss.ai",
    sameAs: [
      "https://twitter.com/",
      "https://www.instagram.com/",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-neutral-950 text-neutral-100 antialiased min-h-dvh">
        {children}
        {/* JSON-LD for richer previews */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />

        {/** Analytics: choose ONE and uncomment */}
        {/** 1) Google Tag Manager (paste your GTM-XXXX id) */}
        {/**
        <script dangerouslySetInnerHTML={{ __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXX');
        `}} />
        */}

        {/** 2) Plausible (simple, privacy-friendly) */}
        {/**
        <script
          defer
          data-domain="gotsuss.ai"
          src="https://plausible.io/js/script.js"
        />
        */}

        {/** 3) Vercel Analytics (requires `npm i @vercel/analytics`) */}
        {/**
          import { Analytics } from '@vercel/analytics/react';
          <Analytics />
        */}
      </body>
    </html>
  );
}
import './globals.css';
export default function RootLayout({ children }: { children: React.ReactNode }) { return (<html lang='en'><body>{children}</body></html>); }
