"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import SplitType  from "split-type"
import image3 from "@/public/8.png"
import gsap from 'gsap';
const page = () => {






    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
            ".txt",
            { x: -100, autoAlpha: 0, },
            { x: 0, autoAlpha: 1, duration: 0.5, ease: "power2.out", stagger: 0.2 }
        );

        return () => { tl.kill() };
    }, []);






    return (
        <section className="relative min-h-screen py-8 justify-start h-full w-full items-start flex-col gap-4 ">

            <div className="flex txt flex-col gap-y-4 justify-start items-start max-w-xl">
                <Image src={image3} alt="about picture of me" className="w-full max-h-96 object-cover " />
                <h1 className="text-neutral-400 text-lg">About</h1>

                <b className="text-3xl font-bold">Léonel Yimga </b>
                <p className="text-container">
                    Hello,<br />
                    I&apos;m <b>Léonel yimga</b>, a self-taught developer with a knack for capturing
                    moments through code and creative writing. Based in the Yaounde Cameroon,
                    my passion for development and storytelling is inspired by the dynamic urban lifestyle.

                </p>
                <p className="text-container">

                    My projects have been showcased in various publications and exhibitions globally.
                    I strive for perfection and aim to create stunning digital experiences for my clients.

                </p>
            </div>

        </section>
    )
}

export default page
