import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Mi Portfolio",
  description: "Hola! Me llamo Max, Soy desarrollador web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">

      <body className="inset-0 -z-10 h-full w-full items-center  [background:radial-gradient(125%_125%_at_50%_100%,#000_50%,#5f7996_100%)]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
