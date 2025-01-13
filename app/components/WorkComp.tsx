
"use client"
import { workCompType } from '@/lib/type'
import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'

const WorkComp = ({ workCompProps }: { workCompProps: workCompType }) => {

    const imageRef = useRef<HTMLImageElement | null>(null)

    // gsap.defaults({delay:200})

    const handleAnimeImageEnter = () => {
        gsap.to(imageRef?.current, {
            scale: 1,
            ease: "power4",
            opacity: 1
        })
    }

    const handleAnimeImageLeave = () => {
        gsap.to(imageRef?.current, {
            scale: 0.7,
            opacity: 0,
            ease: "power4",

        })
    }


    return (
        <div>
            <Link href={workCompProps?.link}  onMouseLeave={() => handleAnimeImageLeave()}
                onMouseEnter={() => handleAnimeImageEnter()} className="hidden lg:flex items-center py-2 cursor-pointer h-12 gap-x-4 border-b border-neutral-400/20">
                <div className="w-2/12 "> <span className="text-neutral-400 text-sm"> {workCompProps.date} </span> </div>
                <div className="w-9/12 flex relative "> <h5 className="text-sm font-medium group-hover:translate-x-4 transition-[transform] dutation-300 ease"> {workCompProps.title} </h5>
                    <div>  {workCompProps?.image && <Image alt={workCompProps?.title} src={workCompProps?.image} ref={imageRef}
                        className={"scale-70 transition-[scale,opacity] all object-cover origin-center ease-out duration-100 h-36 opacity-0 left-[70%] -top-[34px]  absolute  w-36 rounded-xl"} />}  </div>
                </div>
                {/* <Link href={workCompProps?.link} > */}
                    <button type="button" className=" bg-neutral-400/20 text-xs rounded-lg px-4 py-2">
                        {workCompProps?.theme}
                    </button>
                {/* </Link> */}

            </Link>

            {/* <div className="flex flex-col gap-y-4 lg:hidden  lg:sr-only not-sr-only">

                {workCompProps?.image && <Image alt={workCompProps?.title} src={workCompProps?.image} ref={imageRef}
                    className={"w-full h-56 object-cover rounded-xl "} />}

                <Link href={workCompProps?.link} >
                    <button type="button" className=" bg-neutral-400/20 text-xs rounded-lg px-4 py-2">
                        {workCompProps?.theme}
                    </button>
                </Link>

                <div className="flex flex-col gap-y-2">
                    <span className="text-neutral-400 text-sm"> {workCompProps.date} </span>
                    <h5 className="text-lg font-medium"> {workCompProps.title}</h5>
                </div>


            </div> */}
            </div>
    )
}

export default WorkComp
