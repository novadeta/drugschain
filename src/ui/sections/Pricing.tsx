import Image from "next/image";
import ButtonGradient from "../orgasms/ButtonGradient";
import { Headline, SubHeadline } from "../components/Typography";
import { tw } from "@/lib/utils";
import CardPricing from "../components/CardPricing";
export default function Pricing(){
    return (
        <section className="container">
            <ButtonGradient className="py-2 px-[12px]">
                <Image src={"./assets/icons/ic-drugschain.svg"} alt="logo" width={31.2} height={12} />
                    <div className="flex gap-1 items-center">
                        <p className="text-[16px] text-headline">Pricing</p>
                    </div>
            </ButtonGradient>
            <Headline>Paket Harga Drugschain</Headline>
            <SubHeadline className="max-w-[840px]">Pilih paket yang sesuai dengan kebutuhan Anda untuk memastikan pengiriman obat yang aman, transparan, dan efisien.</SubHeadline>
            <div className="flex justify-center gap-6 max-w-[1184px] mx-auto">
                {
                    benefits.map((item,index) => {
                        return <CardPricing key={index} index={index} {...item}/>
                    })
                }
            </div>
        </section>
   )
}

const benefits = [
    {
        title : 'Basic Plan',
        description : 'Cocok untuk apotek atau klinik kecil yang ingin mulai memanfaatkan teknologi blockchain untuk pelacakan obat dan keamanan dasar.',
        price : 'Rp. 0',
        benefit : [
            {
                status : true,
                content : "Pelacakan Rantai Pasokan Dasar (hingga 500 transaksi per bulan)"
            },
            {
                status : true,
                content : "Verifikasi Obat dan Sertifikasi Asli"
            },
            {
                status : true,
                content : "Keamanan Resep Digital"
            },
            {
                status : true,
                content : "Dukungan 24/7 melalui email"
            },
            {
                status : true,
                content : "Pembaruan Sistem Otomatis"
            },
            {
                status : false,
                content : "Smart Contracts untuk Pengiriman dan Pembayaran"
            },
            {
                status : false,
                content : "Laporan Pengiriman dan Audit Mingguan"
            },
            {
                status : false,
                content : "Integrasi Khusus dengan Sistem ERP dan API"
            }]   
        },
    {
    title : 'Professional Plan',
    description : 'Ideal untuk klinik dan apotek yang membutuhkan pengelolaan lebih kompleks, dengan volume transaksi yang lebih besar dan fitur otomatisasi lebih lanjut.',
    price : 'Rp 1.5jt',
    benefit : [
        {
            status : true,
            content : "Pelacakan Rantai Pasokan Lanjutan (hingga 5.000 transaksi per bulan)"
        },
        {
            status : true,
            content : "Smart Contracts untuk Pengiriman dan Pembayaran"
        },
        {
            status : true,
            content : "Keamanan Resep Digital dengan Otentikasi Multi-Faktor"
        },
        {
            status : true,
            content : "Verifikasi Obat Real-Time"
        },
        {
            status : true,
            content : "Laporan Pengiriman dan Audit Mingguan"
        },  
        {
            status : true,
            content : "Dukungan 24/7 melalui email dan chat"
        },  
        {
            status : false,
            content : "Integrasi Khusus dengan Sistem ERP dan API"
        }]
    },
    {
    title : 'Enterprise',
    description : 'Dirancang untuk rumah sakit besar, distributor obat, dan jaringan apotek yang memerlukan solusi blockchain skala besar dengan integrasi khusus.',
    price : 'Rp 5jt',
    benefit : [
        {
            status : true,
            content : "Pelacakan Rantai Pasokan Tak Terbatas"
        },
        {
            status : true,
            content : "Smart Contracts untuk Pengiriman, Pembayaran, dan Pengembalian"
        },
        {
            status : true,
            content : "Integrasi Khusus dengan Sistem ERP dan API"
        },
        {
            status : true,
            content : "Verifikasi Obat dan Sertifikasi Global"
        },
        {
            status : true,
            content : "Keamanan Resep Digital dengan Enkripsi Lanjutan"
        },  
        {
            status : true,
            content : "Laporan Pengiriman dan Analisis Data Mendalam"
        },  
        {
            status : true,
            content : "Dukungan Prioritas 24/7 dengan Manajer Khusus Akun"
        }]
    }
]