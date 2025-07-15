import type { Metadata } from "next";
import "./globals.css";
import { CustomCursor } from "@/components/ui/custom-cursor";

export const metadata: Metadata = {
  title: "Muhammad Arham - Cloud Engineer Portfolio",
  description: "Portfolio of Muhammad Arham, a passionate Cloud Engineer specializing in AWS, Azure, GCP, Infrastructure as Code, and DevOps practices.",
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
