import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react';
const container = {
    hidden: {
        opacity: 0,
        x: -50,
        
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}
const childrenItem = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1
    }
}
export default function Navbar(){
    const [open, setOpen] = useState(false);
    return (
        <>
            <nav className='fixed z-50 top-0 inset-x-0 w-full bg-white/50 backdrop-blur-xl py-[120px] items-center md:relative md:container md:max-w-[800px] md:py-[14px] md:px-6 flex flex-col md:flex-row md:items-center md:gap-[40.8px] md:mt-[34px]'>
                <div 
                    onClick={() => { setOpen(!open)}}
                    className='cursor-pointer absolute md:hidden top-3 right-3'>
                        <Image src="./assets/icons/ic-close.svg" alt="logo" width={50} height={25} className='mt-1' />
                </div>
                <div className='flex flex-col md:flex-row items-center gap-5  md:gap-[40.8px]'>
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: open ? 0 : 1, display: open ? "none" : "block"}}
                    >
                        <Image src="./assets/icons/ic-full-drugschain.svg" alt="logo" width={192} height={25} className='mt-1' />
                    </motion.div>
                    <motion.ul 
                        variants={container}
                        initial="hidden" 
                        animate={"visible"} 
                        className='flex flex-col md:flex-row items-center gap-[40.8px] w-full'>
                            <motion.li variants={childrenItem} className='text-[16px] text-headline'>
                                <a href="#features">Features</a>
                            </motion.li>
                            <motion.li variants={childrenItem} className='text-[16px] text-headline'>
                                <a href="#testimonial">Testimonial</a>
                            </motion.li>
                            <motion.li variants={childrenItem} className='text-[16px] text-headline'>
                                <a href="#pricing">Pricing</a>
                            </motion.li>
                            <motion.li variants={childrenItem} className='text-[16px] text-headline'>
                                <a href="#faq">FAQ</a>
                            </motion.li>
                            <motion.li variants={childrenItem}>
                                <motion.button className='bg-primary text-[16px] py-[6px] text-white rounded-[50px] px-4 leading-6'>Get Started</motion.button>
                            </motion.li>
                    </motion.ul>
                </div>
            </nav>
        </>
    )
}

export function NavbarMobile()  {
    const [open, setOpen] = useState(false);
    return (
        <>
             <motion.ul 
                variants={container}
                initial="hidden" 
                animate={open ? "visible" : "hidden"} 
                className='flex flex-col md:flex-row items-center gap-[40.8px] w-full'>
                    <motion.li variants={childrenItem} className='text-[16px] text-headline'>
                        <a href="#features">Features</a>
                    </motion.li>
                    <motion.li variants={childrenItem} className='text-[16px] text-headline'>
                        <a href="#testimonial">Testimonial</a>
                    </motion.li>
                    <motion.li variants={childrenItem} className='text-[16px] text-headline'>
                        <a href="#pricing">Pricing</a>
                    </motion.li>
                    <motion.li variants={childrenItem} className='text-[16px] text-headline'>
                        <a href="#faq">FAQ</a>
                    </motion.li>
                    <motion.li variants={childrenItem}>
                        <motion.button className='bg-primary text-[16px] py-[6px] text-white rounded-[50px] px-4 leading-6'>Get Started</motion.button>
                    </motion.li>
            </motion.ul>
        </>
    )
}