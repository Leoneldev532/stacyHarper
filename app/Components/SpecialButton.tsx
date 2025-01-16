import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import React from 'react';
import { buttonType } from '@/lib/type';
import { cva } from 'class-variance-authority';

 export const buttonStyles = cva(
  [
    'flex',
    'bord',
    'py-1.5',
    'rounded-xl',
    "specialbtn",
    'justify-center',
    'items-center',
    'gap-x-2',
  ],
  {
    variants: {
      intent: {
          primary: ['bg-customLightMaroon','text-white',"border-b-4","px-4","border-customMaroon","hover:border-b-0","transition-all","ease","hover:border-t-4"],
          primaryp: ['bg-customLightMaroon','text-white',"border-b-4","px-2","border-customMaroon","hover:border-b-0","transition-all","ease","hover:border-t-4"],
        secondary: ['bg-transparent', 'text-white',"border-2","hover:bg-customMaroon","hover:text-white","transition-all","ease","duration-200","border-customMaroon/20","px-2","text-customMaroon"],
        success: ['bg-green-500', 'text-white'],
      },
      size: {
        small: ['text-sm'],
        medium: ['text-lg'],
        large: ['text-xl'],
      },
      iconPosition: {
        left: [],
        right: ['flex-row-reverse'],
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
      iconPosition: 'left',
    },
  }
);


export const SpecialButton = ({ title,onClick, image, ...props }: buttonType) => {
  const classes = twMerge(buttonStyles(props));

  return (
    <button onClick={onClick} className={classes}>
      {props.iconPosition === 'left' && image && (
        <Image
          src={image}
          height={24}
          width={24}
          className="object-cover"
          alt={title || " "}
        />
      )}
     {title && <span className="font-bold">{title}</span>}
      {props.iconPosition === 'right' && image && (
        <Image
          src={image}
          height={24}
          width={24}
          className="object-cover"
          alt={title || " "}
        />
      )}
    </button>
  );
};
