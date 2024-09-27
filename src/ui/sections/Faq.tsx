import FaqItem from "../components/FaqItem"
import { Headline } from "../components/Typography"

export default function Faq(){
    return (
        <section className="container mt-[104px]">
            <Headline>Pertanyaan yang Sering Diajukan</Headline>
            <div className="mt-[50px] flex flex-col max-w-[570px] justify-center mx-auto">
                {
                    data.map((item,index) => {
                       return <FaqItem key={index} {...item}/>
                    })
                }
            </div>
        </section>
   )
}

const data = [
    {
        name: "Apa itu Drugschain dan bagaimana cara kerjanya?",
        content : "Drugschain adalah platform berbasis blockchain yang menyediakan solusi pelacakan rantai pasokan obat, keamanan resep digital, dan pengelolaan pengiriman dengan smart contracts. Kami memastikan bahwa setiap obat yang dikirimkan dapat dilacak secara transparan dan aman, serta diverifikasi keasliannya."
    },
    {
        name: "Bagaimana cara Drugschain memastikan obat yang dikirim asli?",
        content : ""
    },
    {
        name: "Apakah Drugschain cocok untuk bisnis kecil seperti apotek?",
        content : ""
    },
    {
        name : "Bagaimana sistem pembayaran bekerja dengan smart contracts?",
        content: ""
    },
    {
        name: "Apakah Drugschain aman untuk menyimpan data pasien dan resep?",
        content: ""
    },
    {
        name: "Apakah ada batasan transaksi untuk setiap paket?",
        content: ""
    },
    {
        name: "Apakah saya bisa meng-upgrade paket saya di kemudian hari?",
        content: ""
    },
    {
        name: "Apakah Drugschain dapat diintegrasikan dengan sistem lain?",
        content: ""
    },
    {
        name: "Bagaimana saya bisa memulai dengan Drugschain?",
        content: ""
    }
]