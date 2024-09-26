import { tw } from "@/lib/utils"
import React from "react"

interface props {
    children: React.ReactNode
}

export const Headline: React.FC<props> = ({children, className = ""} : {children : React.ReactNode, className?: string}) => {
    return (
        <>
            <h1 className={tw("mt-6 mx-auto text-headline text-4xl text-center font-medium", className)}>{children}</h1>

        </>
    )
}

export const SubHeadline : React.FC<props> = ({children,className = ""} : {children : React.ReactNode, className?: string}) => {
    return (
        <>
            <p className={tw("mt-6 mx-auto text-subHeadline text-xl text-center max-w-[500px]",className)}>{children}</p>
        </>
    )
}