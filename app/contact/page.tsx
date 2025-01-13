
"use client"
import React, { useEffect } from 'react'
import SpecialLink from '../components/SpecialLink'
import { specialLinkType } from '@/lib/type'
import gsap from 'gsap'

const Page = () => {

    const TabLinks: specialLinkType[] = [
        {
            title: "San Francisco, CA, USA",
            url: "/"
        },
        {
            title: "Instagram",
            url: "/"
        },
        {
            title: "mod@email.com",
            url: "/"
        },
        {
            title: "Facebook",
            url: "/"
        },
        {
            title: "www.yoursite.com",
            url: "/"
        },
        {
            title: "Youtube",
            url: "/"
        }
    ]



    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
            ".txtContact",
            { x: -100, autoAlpha: 0, },
            { x: 0, autoAlpha: 1, duration: 0.5, ease: "power2.out", stagger: 0.2 }
        );

        return () => { tl.kill() };
    }, []);




    return (
        <section className='flex flex-col py-8 gap-y-4 txtContact justify-start items-start'>
            <h1 className="text-neutral-400 text-lg">About</h1>

            <b className="text-3xl font-bold">Let's work together </b>

            <p>Feel free to contact me and I can make your idea into successful business.</p>

            <div className="grid grid-cols-2  py-8 gap-x-8  gap-y-2 ">
                {TabLinks?.map((link: specialLinkType, index: number) => (
                    <SpecialLink specialLinkProps={link} key={index + "sl"} />
                ))

                }
            </div>


            <div className="flex flex-col justify-start items-start">
                <span>1 of 4 </span>
                <span className="text-2xl"> What should we call  <b className="">you?</b> </span>
            </div>

            <form className="flex flex-col w-full gap-y-3">
                <label>Your name</label>
                <input className="border-b border-neutral-400 outline-none appearance-none h-8 focus:border-neutral-700 " type="name" placeholder="name" />
                <label>Email </label>
                <input className="border-b border-neutral-400 outline-none  appearance-none   h-8 focus:border-neutral-700 " type="email" placeholder="johndoe@gmail.com" />


            </form>

        </section>
    )
}

export default Page
