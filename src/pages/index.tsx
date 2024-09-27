import Image from "next/image";
import localFont from "next/font/local";
import Banner from "@/ui/sections/Banner";
import Navbar from "@/ui/components/Navbar";
import Feature from "@/ui/sections/Feature";
import Company from "@/ui/sections/Company";
import UserGuide from "@/ui/sections/UserGuide";
import Testimonial from "@/ui/sections/Testimonial";
import Pricing from "@/ui/sections/Pricing";
import Faq from "@/ui/sections/Faq";
import Footer from "@/ui/components/Footer";

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
      <Company/>
      <Feature/>
      <UserGuide/>
      <Testimonial/>
      <Pricing/>
      <Faq/>
      <Footer/>
    </>
  );
}
