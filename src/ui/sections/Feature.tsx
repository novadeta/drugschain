import Image from "next/image"
import dynamic from "next/dynamic"
import { Headline, SubHeadline } from "../components/Typography";
import FeatureItem from "../components/FeatureItem";
const ButtonGradient = dynamic(() => import("../orgasms/ButtonGradient"), { ssr: false });
export default function Feature(){
    return (
        <>
        <section id="features" className="container mt-[60px] scroll-mt-9">
            <ButtonGradient href="#features" className={"py-2 px-[12px]"}>
                <div className="flex gap-1 items-center">
                    <Image src={"./assets/icons/ic-drugschain.svg"} alt="logo" width={31.2} height={12} />
                    <p className="text-[16px] text-headline">Features</p>
                </div>
            </ButtonGradient>
            <Headline>Mengapa Memilih Drugschain?</Headline>
            <SubHeadline className="max-w-[840px]">Drugschain telah menjadi pilihan terpercaya untuk ribuan pengguna, apotek, dan penyedia layanan kesehatan di seluruh dunia. Kami bekerja sama dengan para pemimpin industri untuk memastikan setiap obat yang Anda terima aman, asli, dan terverifikasi.</SubHeadline>
            <FeatureItem/>
        </section>
        </>
   )
}