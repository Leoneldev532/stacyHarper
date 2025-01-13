
"use client"
import { specialLinkType } from '@/lib/type'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import SpecialLink from './SpecialLink'
import gsap from 'gsap'
import Lenis from '@studio-freight/lenis/types'
import { ScrollTrigger } from 'gsap/all'

const Header = () => {


  const tabLinksHeader: specialLinkType[] = [
    {
      title: "Photos",
      url: "/",
      onClick:()=>{handleCloseHamBurger()}
    },
    {
      title: "About",
      url: "/about",
      onClick:()=>handleCloseHamBurger()
    },
    {
      title: "Journal",
      url: "/journal",
      onClick:()=>handleCloseHamBurger()
    },
    {
      title: "Contact",
      url: "/contact",
      onClick:()=>handleCloseHamBurger()
    }
  ]

  const menuRef = useRef<HTMLDivElement | null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)


  const hamburgerRefM1 = useRef<HTMLDivElement | null>(null)
  const hamburgerRefM2 = useRef<HTMLDivElement | null>(null)


  const handleOpenHamBurger = () =>{
    
    if (menuRef?.current && hamburgerRefM1?.current && hamburgerRefM2?.current) {
     // Rotation
     menuRef.current.style.height = "20rem"
     hamburgerRefM1.current.style.transform = `rotate(-45deg)`;
     hamburgerRefM2.current.style.transform = `rotate(45deg)`;

     // Positionnement pour croisement parfait
     hamburgerRefM2.current.style.top = `-5px`; // Ajusté pour croisement au milieu
     hamburgerRefM1.current.style.top = `5px`; // Ajusté pour croisement au milieu

     // Positionnement horizontal
     hamburgerRefM2.current.style.left = `5px`;
     hamburgerRefM1.current.style.left = `5px`;
     setIsOpen(true)
    }
  }


  const handleCloseHamBurger = () =>{
    
    if (menuRef?.current && hamburgerRefM1?.current && hamburgerRefM2?.current) {
    menuRef.current.style.height = "8rem"
    hamburgerRefM1.current.style.transform = `rotate(0deg)`
    hamburgerRefM2.current.style.transform = `rotate(0deg)`
    hamburgerRefM2.current.style.top = `0px`
    hamburgerRefM1.current.style.top = `0px`

    hamburgerRefM2.current.style.left = `0px`
    hamburgerRefM1.current.style.left = `0px`
    setIsOpen(false)
    }
 }


  const handleToggleHamburger = () => {
      if (isOpen) {
       
        handleCloseHamBurger()

      } else {
        
        handleOpenHamBurger()
    }
  }

const handleAnimatedMenu = () =>{
  const tl = gsap.timeline({delay:1});
    tl.fromTo(
        ".txtHeader",
        { y: 20, autoAlpha: 0, filter:"blur(12px)" },
        { y: 0, autoAlpha: 1, duration: 0.5, ease: "power2.out",filter:"blur(0px)", stagger: 0.2 }
    );

    return () => { tl.kill() };
}

useEffect(() => {
    handleAnimatedMenu()
},[]);

useEffect(() => {
const tl = gsap.timeline({delay:3});
  tl.fromTo(
      ".logoTxt",
      { x: -80, autoAlpha: 0, },
      { x: 0, autoAlpha: 1, duration: 0.2, ease: "power4.out", stagger: 0.2 }
  );

  return () => { tl.kill() };
}, []);



const lenis = new Lenis()

lenis.on('scroll', (e:any) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


  return (
    <div className=' lg:sticky top-0 fixed lg:bg-transparent bg-white  z-50 left-0 w-full flex py-4  md:py-8 flex-col justify-start   lg:h-[90vh]   items-start'>
      <div className="hidden lg:flex flex-col items-start justify-start">
        <div className="flex flex-col gap-y-2 justify-start items-start">

          <div className="logo flex txtHeader font-extrabold text-4xl text-black gap-x-4 justify-start items-start">
            <span className="logoTxt">L</span>
            <span className="logoTxt">E</span>
            <span className="logoTxt">0</span>
            <span className="logoTxt">Y</span>
          </div>
          <div className='flex flex-col txtHeader gap-y-1 justify-start items-start'>
            <b>Léonel Yimga </b>
            <span className="text-neutral-400"> Developer frontEnd + Teacher </span>
          </div>

        </div>

        <div className="flex flex-col py-16 justify-start items-start">
          <p className="py-8 txtHeader text-balance max-w-xs">
          I am passionate about crafting code and designing visuals that encapsulate the essence of the moment.</p>

          <ul className="flex flex-col text-sm txtHeader gap-y-3 justify-start items-start">
            {tabLinksHeader?.map((link: specialLinkType, index: number) => (
              <SpecialLink specialLinkProps={link} key={index + "sl"} />
            ))}
          </ul>
        </div>


        <div className="text-sm pt-36  text-neutral-400 txtHeader"><span>© 2024 - Template by  <Link className="underline" href="https://Leonelyimga.com">Léonel yimga</Link></span>  </div>
      </div>

      <div ref={menuRef} className="flex fixed h-[8rem] justify-start items-start transition-all duration-400 py-4 ease left-0 bg-white lg:hidden flex-col w-full  gap-y-3">

        <div className="w-full flex justify-between items-center   px-8 ">
          <div className="flex flex-col gap-y-2 justify-start items-start">

            <div className="logo flex font-extrabold text-4xl text-black gap-x-4 justify-start items-start">
              <span>L</span>
              <span>E</span>
              <span>0</span>
              <span>Y</span>
            </div>
            <div className='flex flex-col gap-y-1 txtHeader justify-start items-start'>
              <b>Léonel Yimga </b>
              <span className="text-neutral-400  "> Developer frontEnd + Teacher </span>
            </div>

          </div>

          <div className="flex justify-center items-center">
            <button onClick={() => handleToggleHamburger()} className="flex flex-col gap-y-2 ">
              <div ref={hamburgerRefM1} className="h-0.5 relative transition-transform duration-300 ease origin-center will-change-auto  w-8 bg-black"> </div>
              <div ref={hamburgerRefM2} className="h-0.5 relative transition-transform duration-300 ease origin-center will-change-auto  w-8 bg-black"> </div>
            </button>
          </div>
        </div>

        <div className="flex bg-white top-20 left-0 w-full h-auto px-8 overflow-hidden  flex-col justify-start items-start gap-y-2">
          <ul className="flex flex-col py-4 gap-y-3 text-lg justify-start items-start">
            {tabLinksHeader?.map((link: specialLinkType, index: number) => (
              <SpecialLink specialLinkProps={link} key={index + "sl"} />
            ))}
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Header
