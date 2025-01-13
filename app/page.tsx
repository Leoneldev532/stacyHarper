"use client"
import React, { useEffect } from 'react'
import image1 from "@/public/1.jpg"
import image2 from "@/public/1.png"
import image3 from "@/public/8.png"
import image4 from "@/public/9.png"
import image5 from "@/public/5.png"
import PhotoCard from './components/PhotoCard'
import { PhotoCardType } from '@/lib/type'
import gsap from 'gsap'
const App = () => {


  const PPhotoCardTab1: PhotoCardType[] = [
    {
      link: "https://template-portfolio-1-ebon.vercel.app/",
      image: image1,
      title: "Template portfolio",
      height: 570,
    },
    {
      link: "https://special-sale-product-mkgr.vercel.app/",
      image: image2,
      title: "E-commerce Platform for Fashion Retail",
      height: 470,
    },
    {
      link: "https://dashboard-port-5zlb.vercel.app/",
      image: image4,
      title: "Personal Portfolio Website",
      height: 470,
    },
  ]

  const PPhotoCardTab2: PhotoCardType[] = [
    {
      link: "https://dashboard-port-5zlb.vercel.app/",
      image: image3,
      title: "Personal Portfolio Website",
      height: 470,
    },
    {
      link: "https://saas-template-blond.vercel.app/",
      image: image4,
      title: "Blog for Travel Enthusiasts",
      height: 440,
    },
    {
      link: "https://fashion-website-indol-nine.vercel.app/",
      image: image5,
      title: "Corporate Website for Tech Startup",
      height: 500,
    }
  ]


    useEffect(() => {
  
      const tl = gsap.timeline({delay:1});
      tl.fromTo(
          ".txtCard",
          { y: 20, autoAlpha: 0, filter:"blur(12px)" },
          { y: 0, autoAlpha: 1, duration: 0.5, ease: "power2.out",filter:"blur(0px)", stagger: 0.2 }
      );
  
      return () => { tl.kill() };
  });


  return (
    <section className="   relative min-h-screen py-8 justify-start h-full w-full  grid gap-4 grid-cols-1 sm:grid-cols-2">
    <h1 className= "md:hidden block text-neutral-400 text-lg">Photos</h1>

      <div className="flex flex-col w-full gap-y-4">
        {PPhotoCardTab1.map((pPhotoCard: PhotoCardType, index: number) => (

          <PhotoCard PhotoCardProps={pPhotoCard} key={`pfl ${index}`} />


        ))

        }


      </div>
      <div className="flex flex-col w-full gap-y-4">
        {PPhotoCardTab2.map((pPhotoCard: PhotoCardType, index: number) => (
          <PhotoCard PhotoCardProps={pPhotoCard} key={`pfl ${index}`} />


        ))

        }

      </div>
    </section>
  )
}

export default App
