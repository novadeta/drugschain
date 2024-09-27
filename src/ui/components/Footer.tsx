import Image from 'next/image'
export default function Footer(){
    return (
        <>
            <footer className='container py-[104px] flex items-start justify-between mt-[34px]'>
                <div className='flex flex-col gap-[10px]'>
                    <Image src="./assets/icons/ic-drugschain-full-2.svg" alt="logo" width={205} height={25} className='mt-1' />
                    <p className=' text-xl tracking-normal text-subHeadline max-w-[360px]'>Keamanan dalam pengiriman obat. Melindungi obat, resep, pembayaran, hingga sertifikasi.</p>
                </div>
                <ul className='flex flex-col items-start gap-2'>
                    <li className='text-[20px] text-subHeadline'>
                        <a href="#company">Company</a>
                    </li>
                    <li className='text-[20px] text-subHeadline'>
                        <a href="#features">Features</a>
                    </li>
                    <li className='text-[20px] text-subHeadline'>
                        <a href="#testimonial">Testimonial</a>
                    </li>
                    <li className='text-[20px] text-subHeadline'>
                        <a href="#pricing">Pricing</a>
                    </li>
                </ul>
                <ul className='flex flex-col items-start gap-2'>
                    <li className='text-[20px] text-subHeadline'>
                        <a href="#how-its-work">How Its Work</a>
                    </li>
                    <li className='text-[20px] text-subHeadline'>
                        <a href="#integration">Integration</a>
                    </li>
                    <li className='text-[20px] text-subHeadline'>
                        <a href="#benefits">Benefits</a>
                    </li>
                    <li className='text-[20px] text-subHeadline'>
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