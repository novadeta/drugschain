import { tw } from "@/lib/utils"
import Image from "next/image"

export default function CardPricing({index = 0,title = "",description = "",price = "",benefit = [{ status : false, content : ""}]}) {
    return (
        <div className={tw("py-10 px-6 rounded-[12px]", index == 1 && "bg-primary")}>
            <h4 className={tw("font-bold text-2xl text-headline",index == 1 && "text-white")}>
                {title}
            </h4>
            <p className={tw("text-base text-subHeadline",index == 1 && "text-white")}>
                {description}
            </p>
            <p  className={tw("mt-5 font-semibold text-[56px]",index == 1 && "text-white")}>{price} <span className="font-light text-base">/ Bulan</span></p>
            <button className={tw("mt-6 border-[1.5px] border-primary rounded py-[12.5px] w-full font-semibold text-base",index == 1 && "text-primary bg-white")}>Get Started Now</button>
            <div className="mt-10 flex flex-col gap-[12px]">
                    {
                        benefit.map((item,i) => {
                            return (
                                <div key={i} className={tw("flex items-center gap-[17px]", index === 1 && "text-white")}>
                                    <div className={tw("p-2 rounded-full", item.status && "bg-[#E8FBEA]", !item.status && "bg-[#F5FAF4]")}>
                                        <Image 
                                            src={item.status ? "./assets/icons/ic-check-success.svg" : "./assets/icons/ic-close.svg"} 
                                            alt="icon-check" 
                                            width={16} 
                                            height={16}
                                            />
                                    </div>
                                        <p className={tw("font-medium", item.status ? "text-headline" : "text-subHeadline", index == 1 && "text-white")}>{item.content}</p>
                                </div>
                            )
                        })
                    }
                </div>
        </div>
    )
}