import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Flixa — Instant AI-powered file sync",
    template: "%s • Flixa",
  },
  description:
    "Flixa enables instant file sharing across devices with AI-powered secure cloud syncing.",
  applicationName: "Flixa",
  metadataBase: new URL("https://flixa.example"),
  openGraph: {
    title: "Flixa — Instant AI-powered file sync",
    description:
      "Instantly sync and share files across devices with end-to-end encryption and AI optimization.",
    url: "https://flixa.example",
    siteName: "Flixa",
    images: [
      { url: "/opengraph-image.png", width: 1200, height: 630, alt: "Flixa" },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flixa — Instant AI-powered file sync",
    description:
      "Instantly sync and share files across devices with AI-powered, secure cloud syncing.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0b0b10" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(){
  try {
    const storageKey = 'flixa-theme';
    const persisted = localStorage.getItem(storageKey);
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const system = mql.matches ? 'dark' : 'light';
    const theme = persisted || system;
    document.documentElement.setAttribute('data-theme', theme);
    // Sync Tailwind dark: variant by toggling the 'dark' class
    document.documentElement.classList.toggle('dark', theme === 'dark');
  } catch (e) {}
})();
`,
          }}
        />
      </head>
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
