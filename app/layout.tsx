import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import TopNav from "@/components/top-nav";

export const metadata: Metadata = {
  title: "Store",
  description: "Store for selling products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`  antialiased , font-kufi`}>
        <ModalProvider />
        <ToastProvider />
        <TopNav />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
