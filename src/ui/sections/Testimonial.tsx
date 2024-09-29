import TestimoniItem from "../components/TestimoniItem";
import { Headline, SubHeadline } from "../components/Typography";

export default function Testimonial(){
    return (
        <section id="testimonial" className="mt-[150px] pt-[106px] pb-[106px] bg-[#F5FAF4] -scroll-mt-20">
            <Headline>Testimoni Pengguna</Headline>
            <SubHeadline>Apa Kata Pengguna Tentang Drugschain?</SubHeadline>
            <TestimoniItem/>
        </section>
   )
}