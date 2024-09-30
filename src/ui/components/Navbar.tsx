import { tw } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react';
const container = {
    hidden: {
        x: -50,
        opacity: 0,
        transition: {
            staggerChildren: 0.1,
        }
        
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        }
    }
}
const containerMobile = {
    hidden: {
        x: -50,
        height: "0",
        opacity: 0,
        
    },
    visible: {
        x: 0,
        height: "100vh",
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        }
    }
}
const childrenItem = {
    hidden: {
        x: -50,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
    }
}
export default function Navbar(){
    const [open, setOpen] = useState(false);
    const [scrollY,setScrollY] = useState(0);
    const [visible,setVisible] = useState(true);
    const navbarVariants = {
        hidden: { 
            y: '-100%',
            opacity: 0,
            transition: { duration: 0.3 }
          },
          visible: {
            y: '0%',
            opacity: 1,
            transition: { duration: 0.3 }
          }
    }
    function handleClick(){
        setOpen(!open);
    }
    useEffect(() => {
        const windowScroll = () => {

            setScrollY(window.scrollY);
            if (scrollY < 100 || scrollY > window.scrollY) {
                setVisible(true);
            }
            else {
                setVisible(false);
            }
        }
        window.addEventListener('scroll', windowScroll);
        return () => {
            window.removeEventListener('scroll', windowScroll);
        }
    },[scrollY])
    return (
        <>
            <motion.header 
                variants={navbarVariants}
                initial="visible"
                animate={visible ? "visible" : "hidden"}
                className={tw('fixed z-50 top-0 py-[0px] shadow-[0_16px_16px_0px_rgba(0,0,0,0.09)] md:rounded-[60px] inset-x-0 w-full bg-white/50 backdrop-blur-lg  md:container md:max-w-[800px] md:py-[14px] md:px-6 flex flex-col md:flex-row md:items-center md:gap-[40.8px] md:mt-[34px]',(scrollY <= 100)? "relative md:relative" : "md:fixed")}>
                <nav className='py-6 px-6 relative transition-all md:py-0'>
                    <Image src="./assets/icons/ic-full-drugschain.svg" alt="logo-drugschain" width={192} height={192} className='block md:hidden' />
                    <div 
                        onClick={() => { setOpen(!open)}}
                        className='cursor-pointer absolute  md:hidden top-3 right-3'>
                            {
                                open 
                                ? 
                                <Image src="./assets/icons/ic-close.svg" alt="logo" width={30} height={30} className='mt-3' /> 
                                : 
                                <svg xmlns="http://www.w3.org/2000/svg" className='mt-3' height={30} width={30} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /> 
                                </svg>
                            }
                                                                                                                                       
                    </div>
                    <AnimatePresence>
                        {open && <NavbarMobile changeOpen={() => handleClick()} open={open} />}
                    </AnimatePresence>
                    <div className='hidden md:flex md:flex-row items-center gap-5 md:gap-[40.8px]'>
                        <motion.a
                        initial={{opacity: 0}}
                        animate={{opacity: open ? 0 : 1, display: open ? "none" : "block"}}
                        href='#'
                        >
                            <Image src="/assets/icons/ic-full-drugschain.svg" alt="logo" width={192} height={192} />
                        </motion.a>
                        <motion.ul 
                            variants={container}
                            initial="hidden" 
                            animate={"visible"} 
                            className='flex md:flex-row items-center gap-[40.8px] w-full '>
                                <motion.li variants={childrenItem} className='text-[16px] text-headline hover:text-primary transition-colors'>
                                    <a href="#features">Features</a>
                                </motion.li>
                                <motion.li variants={childrenItem} className='text-[16px] text-headline hover:text-primary transition-colors'>
                                    <a href="#testimonial">Testimonial</a>
                                </motion.li>
                                <motion.li variants={childrenItem} className='text-[16px] text-headline hover:text-primary transition-colors'>
                                    <a href="#pricing">Pricing</a>
                                </motion.li>
                                <motion.li variants={childrenItem} className='text-[16px] text-headline hover:text-primary transition-colors'>
                                    <a href="#faq">FAQ</a>
                                </motion.li>
                                <motion.li variants={childrenItem}>
                                    <motion.button className='bg-primary text-[16px] py-[6px] text-white rounded-[50px] px-4 leading-6'>Get Started</motion.button>
                                </motion.li>
                        </motion.ul>
                    </div>
                </nav>
            </motion.header>
        </>
    )
}

export function NavbarMobile({changeOpen,open}:{changeOpen: () => void,open: boolean})  {
    const sendOpen = () => {
        changeOpen()
    }
    return (
        <>
        <div className='md:hidden flex flex-col items-center mt-10 justify-center'>
             <motion.ul 
                variants={containerMobile}
                initial="hidden" 
                animate={open ? "visible" : "hidden"} 
                exit={"hidden"}
                className='flex flex-col md:flex-row items-center gap-[40.8px] w-full'>
                    <motion.li variants={childrenItem} className='text-[16px] text-headline hover:text-primary transition-colors'>
                        <a href="#features" onClick={() => sendOpen()}>Features</a>
                    </motion.li>
                    <motion.li variants={childrenItem} className='text-[16px] text-headline hover:text-primary transition-colors'>
                        <a href="#testimonial" onClick={() => sendOpen()}>Testimonial</a>
                    </motion.li>
                    <motion.li variants={childrenItem} className='text-[16px] text-headline hover:text-primary transition-colors'>
                        <a href="#pricing" onClick={() => sendOpen()}>Pricing</a>
                    </motion.li>
                    <motion.li variants={childrenItem} className='text-[16px] text-headline hover:text-primary transition-colors'>
                        <a href="#faq" onClick={() => sendOpen()}>FAQ</a>
                    </motion.li>
                    <motion.li variants={childrenItem}>
                        <motion.button className='bg-primary text-[16px] py-[6px] text-white rounded-[50px] px-4 leading-6'>Get Started</motion.button>
                    </motion.li>
            </motion.ul>
        </div>
        </>
    )
}


