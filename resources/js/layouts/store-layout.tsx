import Navbar from "@/components/store/Navbar";
import Footer from "@/components/store/Footer";
import { PropsWithChildren } from "react";

export default function RootLayout({
  children }: PropsWithChildren<{
    name?: string;
    descreption?: string;
    logo?: string;
  }>) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
