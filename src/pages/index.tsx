import Image from "next/image";
import localFont from "next/font/local";
import Banner from "@/ui/sections/Banner";
import Navbar from "@/ui/components/Navbar";
import Feature from "@/ui/sections/Feature";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Main() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Feature/>
    </>
  );
}
