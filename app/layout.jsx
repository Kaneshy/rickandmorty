import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Bars/Navbar";
import Footer from "@/components/Bars/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rick and Morty",
  description: "ver rick and morty todos los capitulos latino ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
