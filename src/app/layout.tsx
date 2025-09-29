import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "VELVETY",
  description: "...",
};

const fontDihjauti = localFont({
  src: "../../public/fonts/Dihjauti-Regular.woff",
  variable: "--font-dihjauti",
});

const fontAileron = localFont({
  src: [
    {
      path: "../../public/fonts/Aileron-Light.woff",
      weight: "300",
    },
    {
      path: "../../public/fonts/Aileron-Light.woff",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/Aileron-Regular.woff",
      weight: "400",
    },
    {
      path: "../../public/fonts/Aileron-SemiBold.woff",
      weight: "600",
    },
    {
      path: "../../public/fonts/Aileron-Bold.woff",
      weight: "700",
    },
  ],
  variable: "--font-aileron",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
