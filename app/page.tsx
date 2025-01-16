
"use client"
import piece from "@/public/piece.png"
import storm from "@/public/energy.png"
import Union from "@/public/Union.png"
import Inb from "@/public/B.png"
import diamant from "@/public/Group.png"
import groupdiamant from "@/public/Group 24.png"
import groupCat from "@/public/Group 21.png"

import im1 from "@/public/Group 13.png"
import im2 from "@/public/Group 19.png"

import hear1 from "@/public/hear1.png"
import hear2 from "@/public/hear2.png"
import play from "@/public/play.svg"

import cat from "@/public/cat.png"

import { SpecialButton } from "./Components/SpecialButton"
import { packType, productType } from "@/lib/type"
import caisse from "@/public/Groupo.png"
import PackComponent from "./Components/PackComponent"
import ProductComponent from "./Components/ProductComponent"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import confetti from "canvas-confetti"


const App = () => {

  const tabPack: packType[] = [
    {
      title: "small Pack",
      bigImage: im1,
      listOfItems: [
        {
          icon: storm,
          price: 200
        }, {
          icon: piece,
          price: 4500
        },
        {
          icon: caisse,
          price: 1
        }
      ],
      finalPrice: 2.99
    },
    {

      title: "Big Pack",
      bigImage: im2,
      listOfItems: [
        {
          icon: storm,
          price: 3000
        }, {
          icon: piece,
          price: 200
        },
        {
          icon: caisse,
          price: 2
        }
      ],
      finalPrice: 5.99
    }
  ]



  const [isOpen, setIsOpen] = useState(false)
  const tl3 = gsap.timeline()

  const productTab: productType[] = [
    {
      image: diamant,
      number: "200x",
      price: 1.99,
      allowAnimation: isOpen
    },
    {
      image: groupdiamant,
      number: "1000x",
      price: 4.99,
      allowAnimation: isOpen
    }, {
      image: groupCat,
      number: "5000x",
      price: 1.99,
      allowAnimation: isOpen
    }
  ]


  function celebrate() {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      // colors,
      disableForReducedMotion: true
    });
  }


  const tl = gsap.timeline({ delay: 10 })

  const showCat = () => {
    tl.fromTo(".cat", {
      y: -103,
      duration: 200,
      ease: "elastic"
    }, {
      y: 0,
      onComplete: () => {
        celebrate()
      }
    })
  }

  const rl = gsap.timeline({ delay: 1 })

  const animatedProduct = () => {
    rl.fromTo(".product", {
      y: -100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.3,
      ease: "power3.inOut",
      stagger: 0.3
    })
  }

  const animatedPack = () => {
    rl.fromTo(".pack", {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.3,
      ease: "power3.inOut",
      stagger: 0.3
    })
  }


  useEffect(() => {
    animatedPack()
    animatedProduct()
    showCat()
  }, [isOpen])


  const toggleShow = () => {
    if (isOpen) {

      tl3.to(".present", {
        scale: 1,
        ease: "elastic.inOut",
        duration: 0.3
      }).to(".marketBlock", {
        scale: 0,
        ease: "elastic.inOut",
        duration: 0.3
      }).to(".marketBlock", {
        opacity: 0,
        ease: "elastic.inOut",
        duration: 0.3
      }, "-=2")

      setIsOpen(false)
    } else {
      tl3.to(".present", {
        scale: 0,
        ease: "elastic.inOut",
        duration: 0.3
      }).to(".marketBlock", {
        scale: 1,
        ease: "elastic.inOut",
        duration: 0.3
      }).to(".marketBlock", {
        opacity: 1,
        ease: "elastic.inOut",
        duration: 0.3
      }, "-=2")

      setIsOpen(true)
    }
  }

  const showSpecialBtnAnimated = () => {
    gsap.fromTo(".specialbtn", {
      y: -300,
    }, {
      y: 0,
      ease: "power4",
      duration: 0.4,
      stagger: {
        each: 0.3
      }
    })
  }
  const containerDustRef = useRef<HTMLDivElement | null>(null)



  const addDust = (containerDustRef: HTMLDivElement | null) => {
    if (!containerDustRef) return;
    const total = 70;
    const w = 500; // Largeur du conteneur
    const h = 200; // Hauteur du conteneur
    const Tweens: HTMLDivElement[] = []
    for (let i = total; i--;) {
      const Div = document.createElement('div');
      console.log(R(w), R(h))
      gsap.set(Div, {
        className: 'dot',
        y: R(h),
        opacity: 0
      });
      containerDustRef.appendChild(Div);
      Anim(Div);
      Tweens.push(Div);
    }

    function R(max: number) {
      return Math.random() * max;
    }

    function Anim(elm: HTMLDivElement) {
      const newX = R(w);
      const newY = R(h);

      (elm as any).Tween = gsap.to(elm, {
        duration: R(2) + 1,
        x: newX,
        y: newY,
        opacity: R(0.5) + 0.5,
        scale: R(1) + 0.5,
        delay: R(5),
        onComplete: () => Anim(elm),
        ease: "power1.inOut"
      });
    }
  };


  useEffect(() => {
    showSpecialBtnAnimated()
    addDust(containerDustRef?.current)
  }, [])



  return (
    <section className="  relative min-h-[90vh] py-8 justify-start backdrop-blur-sm  items-center rounded-xl bg-black/20 h-full w-full   flex flex-col  ">

      <header className="flex justify-between items-center w-full px-8 ">

        <div className="flex gap-x-2">
          <SpecialButton image={piece} intent={"primary"} iconPosition="left" title={"34"} />
          <SpecialButton image={storm} intent={"primary"} iconPosition="left" title={"4"} />
        </div>
        <SpecialButton onClick={() => toggleShow()} image={!isOpen ? play : Union} intent={"primaryp"} iconPosition="left" />

      </header>

      <div className="flex present flex-col gap-y-4 w-full relative justify-center items-center min-h-[50vh] ">

        <div ref={containerDustRef} className="h-36 z-0  absolute -top-[90px]  left-[27%]  w-72 flex justify-center items-center">


        </div>

        <div className="flex present  flex-col gap-y-4 w-full z-10  justify-center items-center  ">
          <h1 className="title text-7xl uppercase tracking-wider relative">Cat Game</h1>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#EEAC83" className="size-56 cart">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>


          <button onClick={() => toggleShow()} className="px-4 py-2 rounded-xl beginbtn text-4xl uppercase"> Go Market </button>
        </div>
      </div>

      <div className="absolute w-full scale-0  marketBlock  flex justify-center mt-8  h-full items-center ">

        <Image src={cat} className="object-contain cat absolute -top-[70px] " height="124" width="224" alt="chat" />

        <Image src={hear1} className="object-contain absolute left-[10%] -top-[30px] " height="120" width="64" alt="chat" />
        <Image src={hear2} className="object-contain absolute -top-[30px] left-[83%]  " height="120" width="64" alt="chat" />

        <div className="h-[75vh] w-[80%] absolute top-0 left-[10%] flex  flex-col  border-8 px-4 pb-8 mt-4 bg-customLight items-start border-customLightOrange rounded-xl">

          <div className="w-full flex justify-between  px-3 items-center">

            <h1 className="text-6xl text-customOrange antialiased py-2 font-bold"> Cat shop </h1>
            <div className="flex gap-x-3 justify-start items-center ">
              <SpecialButton image={piece} intent={"secondary"} iconPosition="left" title={"Coins"} />
              <SpecialButton image={storm} intent={"secondary"} iconPosition="left" title={"Energy"} />
              <SpecialButton image={Inb} intent={"primary"} iconPosition="left" title={"Energy"} />
            </div>

          </div>

          <div className="flex gap-x-3 w-full  justify-start h-full pb-8   items-start">
            <div className={"flex gap-x-4 justify-center px-2 h-full items-center w-1/2"}>
              {tabPack.map((item: packType, index: number) => (
                <PackComponent packProps={item} key={index + "pack"} />
              ))


              }

            </div>
            <div className="grid grid-cols-2  gap-4 w-1/2">

              {productTab.map((item: productType, index: number) => (
                <ProductComponent ProductComponentProps={item} key={index + "product"} />
              ))}



            </div>
          </div>
        </div>
      </div>



    </section>
  )
}

export default App
