import Image from "next/image"
import Company from "./Company"
import dynamic from "next/dynamic"
import { Headline, SubHeadline } from "../components/Typography";
const ButtonGradient = dynamic(() => import("../orgasms/ButtonGradient"), { ssr: true });
export default function Feature(){
    return (
        <>
        <Company/>
        <section className="mt-[60px]">
            <ButtonGradient className={"py-2 px-[12px]"}>
                <div className="flex gap-1 items-center">
                    <p className="text-[16px] text-headline">Features</p>
                </div>
            </ButtonGradient>
            <Headline>Mengapa Memilih Drugschain?</Headline>
            <SubHeadline>Drugschain telah menjadi pilihan terpercaya untuk ribuan pengguna, apotek, dan penyedia layanan kesehatan di seluruh dunia. Kami bekerja sama dengan para pemimpin industri untuk memastikan setiap obat yang Anda terima aman, asli, dan terverifikasi.</SubHeadline>
            
        </section>
        </>
   )
}