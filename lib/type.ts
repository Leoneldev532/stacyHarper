import { StaticImageData } from "next/image";

export type WorksAccordionType = {
    title: string,
    description: string,
    numerotation: string;
}

export type workSaleCardType = {
    title: string,
    subTitle: string,
    price: string,
    link: string,
    id?: number
    image: StaticImageData,
}

export type PhotoCardType = {
    title: string,
    image: StaticImageData,
    link: string,
    height:number
}

export type specialLinkType={
    title:string,
    url:string,
    onClick?:()=>void 
}

export type workCompType = {
    date:string,
    title:string,
    image:StaticImageData,
    link:string,
    theme:string
}