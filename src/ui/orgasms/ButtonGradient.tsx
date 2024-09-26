import { tw } from "@/lib/utils";

export default function ButtonGradient({children ,className = ""}: {children: React.ReactNode, className?:string}) {
    return (
        <>
        <div className="mx-auto flex gap-2 items-center justify-center">
            <button className="relative inline-flex overflow-hidden rounded-[40px] p-[2px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#549F2E_0%,#0C85F8_100%)]" />
                <span className={tw(["flex h-full w-full cursor-pointer gap-2 items-center justify-center rounded-[40px] bg-white backdrop-blur-3xl"],className)}>
                    {children}
                </span>
            </button>
        </div>
        </>
    )
}