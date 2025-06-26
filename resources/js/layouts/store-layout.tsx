import Navbar from "@/components/store/Navbar";
import Footer from "@/components/store/Footer";
import { PropsWithChildren } from "react";
import {usePage} from "@inertiajs/react";

export default function RootLayout({
  children }: PropsWithChildren<{
    name?: string;
    descreption?: string;
    logo?: string;
  }>) {
    const props = usePage().props;


  return (
    <>
      <Navbar />

        {props.error && (
            <div className="container mx-auto px-8 mt-8">
                <div className="alert alert-error">
                    {props.error}
                </div>
            </div>
        )}

      <main className="pb-20">
        {children}
      </main>
      <Footer />
    </>
  );
}
