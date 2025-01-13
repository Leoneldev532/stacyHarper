
import { specialLinkType } from '@/lib/type'
import Link from 'next/link'
import React from 'react'
        
        const SpecialLink = ({specialLinkProps}:{specialLinkProps:specialLinkType}) => {
          return (
            <Link onClick={specialLinkProps?.onClick} className="relative group w-full" href={specialLinkProps?.url}>
                <span className="relative"> {specialLinkProps?.title} </span>
                <div className="w-0  transition-[width] duration-300 ease-out  group-hover:w-full h-0.5 bg-neutral-900" ></div>
            </Link>
          )
        }
        
        export default SpecialLink
        