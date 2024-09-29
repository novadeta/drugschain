import React from 'react'
import { IconWork } from '../orgasms/IconWork'

export default function FlowDrugschain(){
    return (
        <>
            <div className='flex flex-wrap lg:flex-nowrap justify-center items-center gap-11 max-w-[1140px] mt-[22px] mx-auto'>
                <div>
                    <IconWork/>
                </div>
                <div className='flex flex-col gap-6'>
                    <div>
                        <h3 className='leading-[24px] font-medium text-[15.9px] text-headline'>Produsen hingga Rumah Sakit dan Apotek</h3>
                        <p className='leading-[24px] text-[15.9px] text-subHeadline'>Produsen mencatat setiap batch obat di blockchain Drugschain. Distributor lalu mengirimkan obat ke rumah sakit dan apotek, dengan riwayat distribusi yang bisa dilacak secara real-time.</p>
                    </div>
                    <div>
                        <h3 className='leading-[24px] font-medium text-[15.9px] text-headline'>Dari Drugschain ke End User</h3>
                        <p className='leading-[24px] text-[15.9px] text-subHeadline'>Pengguna akhir memverifikasi keaslian obat dengan memindai QR code, memastikan obat yang diterima aman dan terjamin keasliannya.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
