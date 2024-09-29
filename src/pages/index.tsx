import Banner from "@/ui/sections/Banner";
import Navbar from "@/ui/components/Navbar";
import Feature from "@/ui/sections/Feature";
import Company from "@/ui/sections/Company";
import UserGuide from "@/ui/sections/UserGuide";
import Testimonial from "@/ui/sections/Testimonial";
import Pricing from "@/ui/sections/Pricing";
import Faq from "@/ui/sections/Faq";
import Footer from "@/ui/components/Footer";
import Bubble from "@/ui/orgasms/Bubble";


export default function Main() {
  return (
    <>
      <Bubble/>
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
