import Image from  'next/image'
const Img = [
    {
        alt: "kalbe",
        src: "/assets/images/kalbe.webp",
    },
    {
        alt: "kimia-farma",
        src: "/assets/images/kimia-farma.webp",
    },
    {
        alt: "siloam-hospital",
        src: "/assets/images/siloam-hospitals.webp",
        width : 130
    },
    {
        alt: "gkci",
        src: "/assets/images/gkci.webp",
    },
    {
        alt: "lippo",
        src: "/assets/images/lippo.webp",
        width : 93
    },
    {
        alt: "mochtar-uph",
        src: "/assets/images/mochtar-uph.webp",
    },
    {
        alt: "novartis",
        src: "/assets/images/novartis.webp",
        width : 200
    },
    {
        alt: "pfizer",
        src: "/assets/images/pfizer.webp",
    },
    {
        alt: "johnson-johnson",
        src: "/assets/images/johnson-johnson.webp",
        width: 130
    },
  
]
export default function Sponsor(){
    return (
        <div className='flex items-center justify-center flex-wrap gap-x-11 gap-y-[54px] px-[45px] mt-11'>
        {
            Img.map((item, index) => {
                return (
                    <div key={index}>
                        <Image className='w-full' src={item.src} alt={item.alt} width={item.width ?? 100} height={64} />
                    </div>    
                )
            })
        }
        </div>
    )
}