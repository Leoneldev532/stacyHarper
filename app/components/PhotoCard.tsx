
import {PhotoCardType } from '@/lib/type'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PhotoCard = ({PhotoCardProps }: {PhotoCardProps:PhotoCardType }) => {
    return (
        <div style={{height:PhotoCardProps?.height + "px"}} className='txtCard relative border md:max-h-full max-h-72 border-zinc-500/20 w-full group portfolio-card  p-4  rounded-lg overflow-hidden  '>
            {PhotoCardProps.image &&
                <Image src={PhotoCardProps.image} height={500} width={1000} alt={PhotoCardProps.title} className='h-full  absolute left-0 top-0  rounded-lg z-0 w-full' />}

            <div className="absolute  gradient-black  z-30 pointer-events-none flex justify-start py-6 px-6 left-0 top-0 bw-full h-full   items-end">
                <h5 className='text-sm lg:text-xl transition-opacity all ease duration-500 group-hover:opacity-100 opacity-0 text-white max-w-xs text-balance '>
                     {PhotoCardProps.title}  </h5>
            </div>

            <div className="absolute z-20 flex justify-end p-10 left-0 top-0 w-full h-full group-hover:bg-black/70  items-end">

                <Link href={PhotoCardProps.link} className="lg:translate-y-36 group  group-hover:translate-y-4 transition-all ease duration-300">

                    <button type="button" className="size-12 group-hover:-rotate-45 transition-all ease duration-300  flex justify-center items-center bg-white rounded-full " >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>


                    </button>

                </Link>

            </div>



        </div>
    )
}

export default PhotoCard
