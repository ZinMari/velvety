import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../../components/ui/Header";
import Container from "../../components/ui/Container";
import Footer from "../../components/ui/Footer";

export const metadata: Metadata = {
  title: "VELVETY",
  description: "...",
};

const fontDihjauti = localFont({
  src: "../../public/fonts/Dihjauti-Regular.woff",
  style: "normal",
  variable: "--font-dihjauti",
  fallback: ["serif"],
});

const fontAileron = localFont({
  src: [
    {
      path: "../../public/fonts/Aileron-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Aileron-Light.woff",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/Aileron-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Aileron-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Aileron-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-aileron",
  fallback: ["sans-serif"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontAileron.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
