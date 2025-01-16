

"use client"
import { packType } from '@/lib/type'
import gsap from 'gsap';
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

const PackComponent = ({ packProps }: { packProps: packType }) => {


    const txtRef = useRef<HTMLSpanElement | null>(null)

    const animePrice = (finalValue:number) => {
        if(!txtRef?.current) return ;

        const element = txtRef?.current

    
            let currentValue = 0; 
            const duration = 4; 
            const incrementTime = (duration * 1000) / (finalValue * 100);
    

            const updateValue = () => {
                if (currentValue < finalValue) {
                    currentValue += 0.01; 
                    element.textContent = currentValue.toFixed(2); 
    
                    gsap.fromTo(element, 
                        { y: 30 }, 
                        { 
                            y: -30, 
                            delay: 1,
                            duration: 0.6,
                            ease: "elastic.out(1, 0.3)",
                            onComplete: () => {
                                gsap.set(element, { y: 0 });
                                updateValue(); 
                            }
                        }
                    );
    
                    setTimeout(updateValue, incrementTime); 
                } else {
                    element.textContent = finalValue.toFixed(2); 
                }
            };
    
            updateValue(); 
    };

    
    useEffect(()=>{
        if(packProps.allowAnimation){
            animePrice(packProps?.finalPrice)

          }
    },[packProps.allowAnimation])
    
    

    return (
        <div className='flex  pack flex-col h-full bg-white w-full gap-y-4   justify-between items-center relative rounded-xl overflow-hidden'>

         
            <span className="text-customMaroon  text-center font-thin text-md packShape w-full h-8 pt-1  z-10  "> {packProps.title} </span>

            {packProps?.bigImage && <Image src={packProps?.bigImage} height="156" className="object-cover size-16  lg:size-36"  width="156" alt={packProps?.title} />}

            <div className="flex flex-col rounded-xl bg-customLightMaroon/20 max-w-lg px-6  lg:px-14 py-4 gap-y-1 lg:gap-y-3">
                {packProps.listOfItems.map((item,index:number) => (
                    <div className="flex gap-x-3 justify-start items-center" key={index + "sitms"}>

                        {item?.icon && <Image src={item?.icon} height="34" width="34" className="object-contain size-8  lg:size-8" alt={`${item?.price}`} />}

                        <span className="text-lg lg:text-2xl   font-extrabold text-customMaroon "> {item?.price}  </span>
                    </div>
                ))
                }
            </div>

            <div className="pb-4 flex justify-center items-center w-full px-6">

                    <button className="rounded-xl py-2 px-1  text-white w-full text-center border border-customMaroon bg-customRed font-bold text-2xl">
                          <span ref={txtRef} className="txt">{packProps?.finalPrice}</span>$
                           </button>

             </div>   

        </div>
    )
}

export default PackComponent
