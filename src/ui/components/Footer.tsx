import Image from 'next/image'
export default function Footer(){
    return (
        <>
            <footer className='container py-10 md:py-[104px] flex gap-10 lg:gap-0 flex-wrap md:flex-nowrap items-start justify-start lg:justify-between mt-[34px] px-3 md:px-0'>
                <div className='flex flex-col gap-5 md:gap-[10px] w-full md:w-auto'>
                    <Image src="./assets/icons/ic-drugschain-full-2.svg" alt="logo" width={205} height={25} className='mt-1' />
                    <p className=' text-xl tracking-normal text-subHeadline md:max-w-[360px]'>Keamanan dalam pengiriman obat. Melindungi obat, resep, pembayaran, hingga sertifikasi.</p>
                </div>
                <ul className='flex flex-col items-start gap-2'>
                    <li className='text-[20px] text-subHeadline hover:text-primary transition-colors'>
                        <a href="#company">Company</a>
                    </li>
                    <li className='text-[20px] text-subHeadline hover:text-primary transition-colors'>
                        <a href="#features">Features</a>
                    </li>
                    <li className='text-[20px] text-subHeadline hover:text-primary transition-colors'>
                        <a href="#testimonial">Testimonial</a>
                    </li>
                    <li className='text-[20px] text-subHeadline hover:text-primary transition-colors'>
                        <a href="#pricing">Pricing</a>
                    </li>
                </ul>
                <ul className='flex flex-col items-start gap-2'>
                    <li className='text-[20px] text-subHeadline hover:text-primary transition-colors'>
                        <a href="#how-its-work">How Its Work</a>
                    </li>
                    <li className='text-[20px] text-subHeadline hover:text-primary transition-colors'>
                        <a href="#integration">Integration</a>
                    </li>
                    <li className='text-[20px] text-subHeadline hover:text-primary transition-colors'>
                        <a href="#benefits">Benefits</a>
                    </li>
                    <li className='text-[20px] text-subHeadline hover:text-primary transition-colors'>
                        <a href="#blog">Blog</a>
                    </li>
                </ul>
                <ul className='flex flex-col items-start gap-2'>
                    <li className='text-[20px] text-subHeadline'>(+62) 545678790</li>
                    <li className='text-[20px] text-subHeadline'>support@drugschain.com</li>
                    <li className='text-[20px] text-subHeadline'>Cirebon, Jawa Barat</li>
                </ul>
            </footer>
        </>
    )
}