
"use client"
import { workCompType } from '@/lib/type'
import React, { useEffect } from 'react'

import image1 from "@/public/1.jpg"
import image2 from "@/public/1.png"
import image3 from "@/public/8.png"
import image4 from "@/public/9.png"
import image5 from "@/public/5.png"
import WorkComp from '../components/WorkComp'
import gsap from 'gsap'

const Page = () => {

    const Tabsworks: workCompType[] = [
        {
            date: "01 jan 2025",
            link: "/",
            image: image1,
            title: "Website of American Bank",
            theme: "dev"
        },
        {
            date: "01 jan 2025",
            link: "https://special-sale-product-mkgr.vercel.app/",
            image: image2,
            title: "E-commerce Platform for Fashion Retail",
            theme: "dev"
        },
        {
            date: "01 jan 2025",
            link: "https://dashboard-port-5zlb.vercel.app/",
            image: image3,
            title: "Personal Portfolio Website",
            theme: "dev"
        },
        {
            date: "01 jan 2025",
            link: "https://saas-template-blond.vercel.app/",
            image: image4,
            title: "Blog for Travel Enthusiasts",
            theme: "dev"
        },
        {
            date: "01 jan 2025",
            link: "https://fashion-website-indol-nine.vercel.app/",
            image: image5,
            title: "Corporate Website for Tech Startup",
            theme: "dev"
        },

    ]



    
    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            ".journal ",
            { x: -100, autoAlpha: 0, },
            { x: 0, autoAlpha: 1, duration: 0.5, ease: "power2.out", stagger: 0.2 }
        );

        return () => { tl.kill() };
    }, []);


    return (
        <section className="relative min-h-screen py-8 justify-start h-full w-full items-start flex-col gap-4 ">

            <h1 className="text-neutral-400 text-lg journal ">Journal</h1>

            <div className='flex flex-col gap-y-4 py-8 journal max-w-2xl'>
                {Tabsworks?.map((link: workCompType, index: number) => (
                    <WorkComp workCompProps={link} key={index + "sl"} />
                ))

                }
            </div>

        </section>
    )
}

export default Page
