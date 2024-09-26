import Image from 'next/image'
export default function Navbar(){
    return (
        <>
            <nav className='container max-w-[800px] py-[14px] px-6 gap-[40.8px] flex items-center mt-[34px]'>
                <Image src="./assets/icons/ic-full-drugschain.svg" alt="logo" width={192} height={25} className='mt-1' />
                <ul className='flex items-center gap-[40.8px]'>
                    <li className='text-[16px] text-headline'>Features</li>
                    <li className='text-[16px] text-headline'>Testimonial</li>
                    <li className='text-[16px] text-headline'>Pricing</li>
                    <li className='text-[16px] text-headline'>FAQ</li>
                    <li>
                        <button className='bg-primary text-[16px] py-[6px] text-white rounded-[50px] px-4 leading-6'>Get Started</button>
                    </li>
                </ul>
            </nav>
        </>
    )
}