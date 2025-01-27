
"use client"


import im1 from "@/public/op.png"

import Image from "next/image"
import { useEffect } from "react"
import gsap from "gsap"
import { MotionPathPlugin } from "gsap/all"
import Link from "next/link"


const App = () => {



  useEffect(() => {

    const tl = gsap.timeline({ delay: 2 })

    gsap.registerPlugin(MotionPathPlugin);
    gsap.set(".t1", { y: "3rem" })
    gsap.set(".t2", { y: "8rem" })

    tl.fromTo(".tof", {
      y: 600,
      x: -100,
      scale: 0.6,
      transform: "rotate(-34deg)"
    }, {
      y: -100,
      scale: 1,
      x: 0,
      ease: "expo.Out",
      transform: "rotate(0deg)",
      duration: 0.9
    }).to(".t1",
      {
        y: 0,
        stagger: 0.05,
        ease: "power1"

      }).to(".t1",
        {
          y: "-3rem",
          stagger: 0.05,
          ease: "power1"

        }, "+=0.6").to(".bgw", {
          scale: 0,
          transformOrigin: "center center",
          ease: "expo.in",
          duration: 0.8,
          rotate: 30
        }).to(".im", {
          duration: 1.3,
          ease: "expo.out",
          transformOrigin: "center center",
          height: 550,
          width: 400,
          y: -20
        }, "-=0.1").to(".t2", {
          y: 0,
          stagger: 0.05,
          ease: "power1"
        }, "<").to(".hheader,.hfooter", {
          opacity: 1,
          duration: 0.5
        }, "<").add(()=>{tl.reverse()})

  }, [])




  return (
    <section className=" relative min-h-[90vh] overflow-hidden  bg-black py-8 justify-center  items-center   h-full w-full   flex flex-col  ">
      <div className="absolute flex  w-full  h-full justify-center items-center pointer-events-none top-0 left-0 z-10">
        <div className="h-72  relative flex  w-80 flex-col justify-start items-center tof">

          <div className="w-full object-cover absolute py-3  px-1 z-10 im   h-56">
            <Image src={im1} height={1000} width={1200} className="h-full w-full object-cover " alt="image" />
          </div>

          <div className="h-full bgw w-[21rem] px-1 flex   flex-col justify-end items-end bg-white z-0 absolute p-4 " >
            <h2 className="text-4xl px-2 h-10 w-full overflow-hidden h1"> <div className="relative inline-flex">
              <div className="t1    " >S</div>
              <div className="t1    " >t</div>
              <div className="t1    " >a</div>
              <div className="t1    " >c</div>
              <div className="t1    " >y</div>
              <div className="t1    " >&nbsp;</div>
              <div className="t1    " >H</div>
              <div className="t1    " >a</div>
              <div className="t1    " >r</div>
              <div className="t1    " >p</div>
              <div className="t1    " >e</div>
              <div className="t1    " >r</div>

            </div>
            </h2>
          </div>

        </div>
      </div>

      <div className="absolute z-0  p-4  flex-col  flex justify-start items-center left-0 top-0 w-full h-full">
        <header className="flex justify-between text-white/80  items-center w-full ">
          <h4 className="stacy harper text-lg  hheader opacity-0">  STACY HARPER  </h4>
          <Link href="/" className=" text-lg hheader opacity-0"> <span>ARCHIVE</span> </Link>
        </header>
        <div className="flex h-[80vh] w-full justify-center items-center ">
          <h2 className="text-9xl text-white px-2 h-28 font-bold  w-full  flex justify-center items-center overflow-hidden "> <div className="relative inline-flex">
            <div className="t2    " >S</div>
            <div className="t2    " >t</div>
            <div className="t2    " >a</div>
            <div className="t2    " >c</div>
            <div className="t2    " >y</div>
            <div className="t2    " >&nbsp;</div>
            <div className="t2    " >H</div>
            <div className="t2    " >a</div>
            <div className="t2    " >r</div>
            <div className="t2    " >p</div>
            <div className="t2    " >e</div>
            <div className="t2    " >r</div>

          </div>
          </h2>
        </div>
        <footer className="flex uppercase text-white/80 w-full justify-between items-center">
          <span className="hfooter opacity-0"> (2026) </span>
          <h4 className="text-lg hfooter  opacity-0"> About </h4>
        </footer>
      </div>

    </section>
  )
}

export default App
