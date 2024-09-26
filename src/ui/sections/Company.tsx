import Image from "next/image";
import dynamic from "next/dynamic";
import Sponsor from "../components/Sponsor";
const ButtonGradient = dynamic(() => import("../orgasms/ButtonGradient"), { ssr: false });

export default function Company(){
    return (
        <section className="container mt-[86px] max-w-[1200px] ">
            <ButtonGradient className={"py-2 px-[12px]"}>
                <Image src={"./assets/icons/ic-drugschain.svg"} alt="logo" width={31.2} height={12} />
                <div className="flex gap-1 items-center">
                    <p className="text-[16px] text-headline">Company</p>
                </div>
            </ButtonGradient>
            <p className="mt-6 mx-auto text-subHeadline text-xl text-center max-w-[500px]">Kami bekerja sama dengan para pemimpin industri untuk memastikan setiap obat yang Anda terima aman, asli, dan terverifikasi.</p>
            <Sponsor/>
        </section>
    )
}