import Image from 'next/image'
import React from 'react'

export default function FlowDrugschain(){
    return (
        <>
            <div className='flex justify-between relative before:block before:absolute before:rounded-[100%_50%] before:border-t-[2px] before:border-l-[2px] transalte- before:border-red-500 before:w-[55%] before:h-[2px] after:block after:absolute after:rounded-[100%_50%] after:border-t-[2px] after:border-l-[2px] after:border-red-500 after:w-[55%] after:h-[2px]'>
                {/* <div className="absolute border-solid h-[100px] w-1/2 rounded-[100%_50%] border-t-[2px] border-l-[2px] border-red-500 "></div>
                <div className="absolute border-solid h-[100px] w-full rounded-[50%_100%] border-t-[2px] border-l-[2px] border-red-500 "></div> */}
                <Circle>
                    <Icons.hospital/>
                </Circle>
                <Circle>
                    <Icons.hospital/>
                </Circle>
            </div>
        </>
    )
}

const Circle: React.FC<{children : React.ReactNode}> = ({children} : {children : React.ReactNode}) => {
    return (
        <div className="flex items-center justify-center p-[14px] w-[72px] rounded-[20px] bg-[#EDEDED]">
            {children}
        </div>
    )
}

const Icons = {
    hospital : () => (
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24"
        viewBox="0 0 24 24"
        className='fill-subHeadline'
        >
        <path d="M21.86 12.48 19.15 8a2 2 0 0 0-1.72-1H15V5a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 1 1.73 3.49 3.49 0 0 0 7 .27h3.1a3.48 3.48 0 0 0 6.9 0 2 2 0 0 0 2-2v-3a1.07 1.07 0 0 0-.14-.52zM6.5 19A1.5 1.5 0 1 1 8 17.5 1.5 1.5 0 0 1 6.5 19zm5.5-8h-2v2H8v-2H6V9h2V7h2v2h2zm4.5 8a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5zM15 12V9h2.43l1.8 3z"></path>
        </svg>
    ),
    cars : () => (
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24"
        viewBox="0 0 24 24" 
        >
        <path d="M12 22c5.421 0 10-4.579 10-10S17.421 2 12 2 2 6.579 2 12s4.579 10 10 10zm-1.5-12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"></path>
        </svg>
    )
}