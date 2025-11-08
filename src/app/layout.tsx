import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CustomCursor } from "@/components/ui/custom-cursor";

export const metadata: Metadata = {
  title: "Muhammad Arham - Cloud Engineer Portfolio",
  description: "Portfolio of Muhammad Arham, a passionate Cloud Engineer specializing in AWS, Azure, GCP, Infrastructure as Code, and DevOps practices.",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
