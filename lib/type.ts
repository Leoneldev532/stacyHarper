import { buttonStyles } from "@/app/Components/SpecialButton";
import {VariantProps } from "class-variance-authority";
import { StaticImageData } from "next/image";





  

export type buttonType  =  VariantProps<typeof buttonStyles> & {
    image:StaticImageData,
    title?:string,
    iconPosition:"left" | "right",
    onClick?:()=>void

}


type itemsPack = {
    icon:StaticImageData,
    price:number
}


export type packType = {
    title:string,
    bigImage:StaticImageData,
    listOfItems:itemsPack[],
    finalPrice:number

}

export type productType = {
    number:string,
    image:StaticImageData,
    price:number,
    allowAnimation:boolean
}


