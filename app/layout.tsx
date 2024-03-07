import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ToasterProvider } from "@/providers/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Duy.dev",
  description: "Duy Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="flex flex-col min-h-[100vh]">
          <ThemeProvider attribute="class" defaultTheme="light">
            <ToasterProvider />
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
