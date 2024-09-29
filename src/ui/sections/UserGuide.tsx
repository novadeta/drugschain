import dynamic from "next/dynamic";
import { Headline, SubHeadline } from "../components/Typography";
import Image from "next/image";
import FlowDrugschain from "../components/FlowDrugschain";
const ButtonGradient = dynamic(() => import("@/ui/orgasms/ButtonGradient"), { ssr: false });
export default function UserGuide(){
    return (
        <section id="work" className="container mt-[104px] px-3 md:px-0 scroll-mt-9">
            <ButtonGradient href="#work" className="py-2 px-[12px]">
                <Image src={"./assets/icons/ic-drugschain.svg"} alt="logo" width={31.2} height={12} />
                <div className="flex gap-1 items-center">
                    <p className="text-[16px] text-headline">how it work</p>
                </div>
            </ButtonGradient>
            <Headline>Jaminan Obat Asli dan Aman dengan Drugschain</Headline>
            <SubHeadline className="max-w-[840px]">Pantau Keaslian dan Keamanan Obat dari Proses Produksi Hingga Sampai ke Tangan Anda, Hanya dalam 2 Langkah Mudah dengan Teknologi Blockchain yang Transparan dan Terpercaya.</SubHeadline>
            <FlowDrugschain/>
       </section>
   )
}