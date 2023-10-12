import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import Navbar from "@/components/self/Navbar";

import Favicon from "/public/images/Metadata/favicon.ico";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/self/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Rainbow",
    default: "Rainbow - File Converter", // a default is required when creating a template
  },
  description:
    "Unleash your creativity with Rainbow – the ultimate online tool for unlimited and free multimedia conversion. Transform images, audio, and videos effortlessly, without restrictions. Start converting now and elevate your content like never before!",
  icons: [{ rel: "icon", url: Favicon.src }],
  generator: "Next.js",
  applicationName: "Rainbow",
  authors: [{ name: "Priyanshu Verma", url: "https://p7u.tech" }],
  colorScheme: "dark",
  creator: "Priyanshu Verma",
  publisher: "Priyanshu Verma",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Rainbow - File Converter",
    description:
      "Unleash your creativity with Rainbow – the ultimate online tool for unlimited and free multimedia conversion. Transform images, audio, and videos effortlessly, without restrictions. Start converting now and elevate your content like never before!",
    url: "https://rainbow.p7u.tech",
    siteName: "Rainbow",
    images: "/logo.png",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords: [
    "image converter",
    "video converter",
    "audio converter",
    "unlimited image converter",
    "unlimited video converter",
  ],
  twitter: {
    title: "Rainbow - File Converter",
    description:
      "Unleash your creativity with Rainbow – the ultimate online tool for unlimited and free multimedia conversion. Transform images, audio, and videos effortlessly, without restrictions. Start converting now and elevate your content like never before!",
    images: ["https://rainbow.p7u.tech/logo.png"],
  },

  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["my-email", "my-link"],
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          enableColorScheme
        >
          <Navbar />
          <div className="flex flex-col min-h-screen">
            <div className="flex-grow pb-10 pt-24">{children}</div>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
