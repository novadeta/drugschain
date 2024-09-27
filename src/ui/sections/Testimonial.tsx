import TestimoniItem from "../components/TestimoniItem";
import { Headline, SubHeadline } from "../components/Typography";

export default function Testimonial(){
    return (
        <section className="pt-[96px] pb-[106px] bg-[#F5FAF4]">
            <Headline>Testimoni Pengguna</Headline>
            <SubHeadline>Apa Kata Pengguna Tentang Drugschain?</SubHeadline>
            <TestimoniItem/>
        </section>
   )
}