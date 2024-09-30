import FaqItem from "../components/FaqItem"
import { Headline } from "../components/Typography"

export default function Faq(){
    return (
        <section id="faq" className="container mt-[104px] px-3 md:px-0 scroll-mt-9">
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
        content : "emua pergerakan obat dari produsen hingga ke konsumen akhir dicatat dalam blockchain. Setiap transaksi dapat diverifikasi secara real-time oleh semua pihak yang terlibat, sehingga tidak ada celah untuk memalsukan data atau manipulasi."
    },
    {
        name: "Apakah Drugschain cocok untuk bisnis kecil seperti apotek?",
        content : "Drugschain sangat cocok untuk bisnis kecil seperti apotek. Dengan sistem ini, apotek dapat memastikan keamanan resep digital melalui otentikasi multi-faktor, serta melacak obat secara real-time untuk menjamin keaslian dan kualitas hingga sampai ke tangan pelanggan."
    },
    {
        name : "Bagaimana sistem pembayaran bekerja dengan smart contracts?",
        content: "Sistem pembayaran dengan Smart Contracts di Drugschain bekerja secara otomatis dan aman. Smart contracts adalah program berbasis blockchain yang mengeksekusi perjanjian pembayaran secara otomatis ketika kondisi yang telah disepakati terpenuhi"
    },
    {
        name: "Apakah Drugschain aman untuk menyimpan data pasien dan resep?",
        content: "Drugschain menggunakan teknologi blockchain untuk memastikan keamanan dan privasi data pasien dan resep. Data disimpan dalam bentuk yang terenkripsi dan dicatat dalam buku besar terdistribusi, yang hanya dapat diakses oleh pihak yang berwenang. Setiap akses atau perubahan data tercatat dalam blockchain, sehingga menciptakan jejak audit yang transparan dan tidak dapat diubah. "
    },
    {
        name: "Apakah ada batasan transaksi untuk setiap paket?",
        content: "Ya, ada batasan transaksi yang berlaku untuk setiap paket yang ditawarkan di Drugschain. Namun, paket ini dirancang untuk memenuhi berbagai kebutuhan anda, mulai dari skala kecil hingga besar. Anda dapat memilih paket yang sesuai dengan kebutuhan anda."
    },
    {
        name: "Apakah saya bisa meng-upgrade paket saya di kemudian hari?",
        content: "Anda dapat mengupgrade paket Drugschain Anda di kemudian hari sesuai kebutuhan anda. Proses upgrade ini dirancang untuk fleksibilitas, sehingga Anda dapat meningkatkan layanan dan fitur yang tersedia dalam paket yang dipilih."
    },
    {
        name: "Apakah Drugschain dapat diintegrasikan dengan sistem lain?",
        content: "Ya, Drugschain dapat diintegrasikan dengan sistem lain melalui API kami. Hal ini memungkinkan Anda untuk menghubungkan platform Drugschain dengan sistem manajemen inventaris, ERP, atau platform bisnis lainnya, sehingga memudahkan pengelolaan rantai pasokan obat secara terpadu."
    },
    {
        name: "Bagaimana saya bisa memulai dengan Drugschain?",
        content: "Untuk memulai, Anda hanya perlu mendaftar di platform kami dan memilih paket yang sesuai dengan kebutuhan bisnis Anda. Setelah itu, tim kami akan membantu Anda dalam proses setup dan integrasi, sehingga Anda dapat segera menggunakan layanan Drugschain dengan lancar."
    }
]
