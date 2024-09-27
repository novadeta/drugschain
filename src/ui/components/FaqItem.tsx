
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react";
import { tw } from "@/lib/utils";
export default function FaqItem({name = "", content = ""}: {name: string, content: string}) {
    const [open, setOpen] = useState(false);
    return (
        <motion.div 
            onClick={() => setOpen(!open)}
            className="cursor-pointer">
            <div className="flex justify-between py-6">
                <h4 className="font-medium text-[15.9px] text-headline">
                    {name}
                </h4>
                <Image className={tw("transition-all", open ? "rotate-90" : "rotate-0")} src={"./assets/icons/ic-arrow-right.svg"} alt="icon next" width={7.2} height={7.2} />
            </div>
            <motion.div
                className="overflow-hidden border-b-[1px] border-b-[#EAEAEA]"
                initial={{height: 0}}
                animate={{height: open ? "auto" : 0 }}    
                transition={{
                    type: "easeInOut",
                    duration: 0.3,
                }}
                >
                <p className={"text-[15.6px] pb-[21px]  leading-[24px] text-subHeadline overflow-hidden"}>
                    {content}
                </p>
                </motion.div>
        </motion.div>
        )
}