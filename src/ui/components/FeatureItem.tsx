import { motion } from "framer-motion"
import Image from "next/image"

const Icon = [
    {
        alt: "icon-slider",
        src: "/assets/icons/ic-slider.svg",
        title : "Cepat dan Transparan",
        content : "Setiap transaksi, mulai dari pengiriman hingga pembayaran, diatur secara otomatis dan dapat diakses kapan saja oleh Anda." 
    },
    {
        alt: "icon-check-shield",
        src: "/assets/icons/ic-check-shield.svg",
        title : "Keamanan Terjamin",
        content : "Blockchain kami memastikan semua informasi tetap aman, tidak dapat dimanipulasi, dan hanya dapat diakses oleh pihak yang berwenang."
    },
    {
        alt: "icon-container",
        src: "/assets/icons/ic-container.svg",
        title : "Pengiriman Tepat Waktu",
        content : "Tidak ada lagi penundaan atau kesalahan dalam pengiriman obat. Anda dapat memantau status pengiriman obat secara real-time."
    },
    {
        alt: "icon-check-cirle",
        src: "/assets/icons/ic-check-circle.svg",
        title : "Verifikasi Mudah",
        content : "Cukup satu klik untuk memverifikasi keaslian obat yang Anda terima, memastikan hanya mendapatkan obat yang sesuai standar."
    }
]

export default function FeatureItem() {
    return (
        <div className="grid md:grid-cols-2 gap-y-[54px] gap-x-[60px] max-w-[873px] mt-16 mx-auto">
            {
                Icon.map((item,index) => {
                    return (
                        <div key={index} className="flex flex-col group/features relative">
                            <div className="px-9  z-10 mb-6">
                                <Image src={item.src} alt={item.alt} width={34} height={64} />
                            </div>
                            <div className="absolute top-0 bottom-0 left-0 h-full w-[2px] bg-headline" />
                            <div className="relative px-9">
                                <div className="absolute top-0 bottom-0 left-0 h-6 group-hover/features:h-10 w-2 rounded-tr-full rounded-br-full bg-headline group-hover/features:bg-primary transition-all duration-200 " />
                                <motion.h3 transition={{type: 'spring' , duration: 0.55}} className="text-2xl group-hover/features:translate-x-2 group-hover/features:text-primary text-headline font-semibold transition-all duration-200">{item.title}</motion.h3>
                                <p className="mt-[14px] text-[20px] text-subHeadline max-w-[350px]">{item.content}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}