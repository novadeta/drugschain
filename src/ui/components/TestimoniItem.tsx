import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useLayoutEffect, useRef, useState } from "react"


export default function TestimoniItem() {
   
    return (
        <div className="overflow-hidden mx-auto max-w-[1440px]">
                <Cart items={Item['testi-1']} type="normal" />
                <Cart items={Item['testi-2']} type="reverse"/>
                <Cart items={Item['testi-3']} type="normal"/>
        </div>

    )
}

type props = {
    items : {
        alt : string,
        src : string,
        name : string,
        position : string,
        content : string
    }[],
    type : string | "normal" | "reverse"
}

export const Cart : React.FC<props> = ({items = [], type = ""}) => {
    const [width, setWidth] = useState(0)
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
       if (ref.current) {
        setWidth(ref.current.scrollWidth);
       } 
    },[items])
    const animationVariants = {
        initial: (direction : string) => ({
            x: direction === "reverse" ? -513 : 0,
        }),

        animate: (direction : string) => ({
            x: direction === "reverse" ? 0 : -width,
        }),
    };
    return (
        <div className="flex gap-4 mt-16 justify-center w-full min-w-[2100px]">
            {
                items.map((item,index) => {
                    return (
                        <motion.div
                        ref={ref}
                        key={index}
                        initial={"initial"}
                        animate={"animate"}
                        variants={animationVariants}
                        custom={type}
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            repeatDelay: 2,
                            duration: 10,
                            ease : "easeInOut"
                        }}
                        className="flex flex-col w-full max-w-[519px] gap-4 p-6 bg-[#FFFFFF] hover:shadow-2xl cursor-pointer">
                            <div className="flex gap-4">
                                <Image src={item.src} alt={item.alt} width={64} height={64} />
                                <div>
                                    <h3 className="text-base text-headline font-semibold transition-all duration-200">{item.name}</h3>
                                    <small className="text-base text-subHeadline max-w-[350px]">{item.position}</small>
                                </div>
                            </div>
                            <div className="flex ">
                                <p className="text-[18px] leading-[28px] text-subHeadline max-w-[471px]">{item.content}</p>
                            </div>
                        </motion.div>
                    )
                })
            }
        </div>
    )
}

const Item = {
    "testi-1" : [{
        alt: "pic-profile",
        src: "/assets/images/profile-1.png",
        name : "Rina Kartika",
        position : "Chief Pharmacist, Apotek Sehat Bersama",
        content : "Proses pelacakan yang sangat transparan dan mudah diakses. Kami sekarang bisa memantau pengiriman obat dengan lebih efisien!" 
    },
    {
        alt: "pic-profile",
        src: "/assets/images/profile-2.png",
        name : "Andi Suryanto",
        position : "Head of Operations, PT Medika Nusantara",
        content : "Drugschain memastikan setiap obat yang dikirim sudah terverifikasi dan aman. Ini sangat membantu kami dalam mengurangi risiko obat palsu"
    },
    {
        alt: "pic-profile",
        src: "/assets/images/profile-3.png",
        name : "Daniel Wijaya",
        position : "Logistics Manager, RS Mitra Keluarga",
        content : "Penggunaan smart contracts benar-benar mengubah cara kami menangani transaksi pengiriman obat. Semua jadi otomatis dan cepat"
    },
    {
        alt: "pic-profile",
        src: "/assets/images/profile-4.png",
        name : "Tommy Prasetyo",
        position : "IT Security Officer, Klinik Harapan Sehat",
        content : "Cukup satu klik untuk memverifikasi keaslian obat yang Anda terima, memastikan hanya mendapatkan obat yang sesuai standar."
    }],
    "testi-2" : [{
        alt: "pic-profile",
        src: "/assets/images/profile-6.png",
        name : "Novi Handayani",
        position : "Operations Supervisor, PT Global Medika",
        content : "Verifikasi obat dan sertifikasi asli yang mudah diakses membuat kami lebih yakin dalam menjaga kualitas obat yang kami distribusikan." 
    },
    {
        alt: "pic-profile",
        src: "/assets/images/profile-2.png",
        name : "Andi Suryanto",
        position : "Finance Manager, Apotek Sehat Sejahtera",
        content : "Drugschain memastikan setiap obat yang dikirim sudah terverifikasi dan aman. Ini sangat membantu kami dalam mengurangi risiko obat palsu"
    },
    {
        alt: "pic-profile",
        src: "/assets/images/profile-4.png",
        name : "Daniel Wijaya",
        position : "Head of Quality Control, Distribusi Medika Prima",
        content : "Penggunaan smart contracts benar-benar mengubah cara kami menangani transaksi pengiriman obat. Semua jadi otomatis dan cepat"
    },
    {
        alt: "pic-profile",
        src: "/assets/images/profile-6.png",
        name : "Tommy Prasetyo",
        position : "Operations Supervisor, PT Global Medika",
        content : "Cukup satu klik untuk memverifikasi keaslian obat yang Anda terima, memastikan hanya mendapatkan obat yang sesuai standar."
    }],
    "testi-3" : [{
        alt: "pic-profile",
        src: "/assets/images/profile-1.png",
        name : "Wandaya Suloyo",
        position : "Finance Manager, Apotek Sehat Sejahtera",
        content : "Dengan Drugschain, kami bisa menjamin keaslian obat yang dikirimkan kepada pasien. Ini memberikan rasa aman yang sangat penting bagi kami." 
    },
    {
        alt: "pic-profile",
        src: "/assets/images/profile-4.png",
        name : "Michelle Mijaya",
        position : "Head of Operations, PT Medika Nusantara",
        content : "Pelacakan pengiriman obat dalam real-time memberikan kami visibilitas penuh di setiap tahap. Sangat bermanfaat untuk efisiensi operasional."
    },
    {
        alt: "pic-profile",
        src: "/assets/images/profile-5.png",
        name : "Ayu Lestari",
        position : " Chief Procurement Officer, RSU Sumber Waras",
        content : "Pelayanan terbaik dengan teknologi blockchain yang membuat pengiriman obat lebih transparan dan akurat. Kami sangat merekomendasikan Drugschain"
    },
    {
        alt: "pic-profile",
        src: "/assets/images/profile-4.png",
        name : "Tommy Prasetyo",
        position : "IT Security Officer, Klinik Harapan Sehat",
        content : "Cukup satu klik untuk memverifikasi keaslian obat yang Anda terima, memastikan hanya mendapatkan obat yang sesuai standar."
    }],
}
