import { easeInOut, motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const Item = [
    {
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
        position : "Supply Chain Director, Pharma Global Indonesia",
        content : "Cukup satu klik untuk memverifikasi keaslian obat yang Anda terima, memastikan hanya mendapatkan obat yang sesuai standar."
    },
    {
        alt: "pic-profile",
        src: "/assets/images/profile-4.png",
        name : "Tommy Prasetyo",
        position : "Supply Chain Director, Pharma Global Indonesia",
        content : "Cukup satu klik untuk memverifikasi keaslian obat yang Anda terima, memastikan hanya mendapatkan obat yang sesuai standar."
    }
]


export default function TestimoniItem() {
   
    return (
        <div className="overflow-hidden mx-auto max-w-[2200px] ">
            <div className="flex gap-4 mt-16 justify-center w-full min-w-[3200px] ">
                <Cart items={Item}/>
            </div>
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
    }[]
}

export const Cart : React.FC<props> = ({items = [] }) => {
    const [widht, setWidth] = useState(0)
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
       if (ref.current) {
        setWidth(ref.current.scrollWidth);
       } 
    },[])
    const animation = {
        start: {
            x: 0,
        },
        end:{
            x: -widht
        }
    }
    return (
        <>
            {
                Item.map((item,index) => {
                    return (
                        <motion.div
                        ref={ref}
                        key={index}
                        variants={animation}
                        initial="start"
                        animate="end"
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            repeatDelay: 2,
                            duration: 10,
                            ease : "easeInOut"
                        }}
                        className="flex flex-col w-full gap-4 p-6 bg-[#FFFFFF]">
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
        </>
    )
}