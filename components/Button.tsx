import Image from 'next/image';
import React from 'react'

type ButtonProps = {
    type: 'button' | 'submit' | 'reset';
    title: string;
    icon?: string;
    variant: 'btn_dark_green';
}
const Button = ({type, title, icon, variant}:ButtonProps) => {
  return (
   <button className={`flexCenter gap-3 cursor-pointer transition-all hover:bg-light-green hover:text-dark-green rounded-full ${variant}`}
   type={type}
   
   >
   {icon && <Image src={icon} alt="icon" width={24} height={24} />}
   <label className='bold-16 whitespace-nowrap'>{title}</label>
   </button>
  )
}

export default Button