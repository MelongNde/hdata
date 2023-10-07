"use client"

import { Sparkles, Star } from 'lucide-react' 
import Image from 'next/image'

type Props = {
  text: String, 
  position: String,
}

export const Bulb =  ({ text, position } : Props) => {
  return (
    <div className={`${position + ` `} flex flex-row absolute bg-white shadow-lg rounded-full py-[6px] px-[8px] justify-center items-center gap-2`}>
        <p className=' text-[14px] font-semibold'>{text}</p>
        <div className="rounded-full bg-primary">
            {/* <Star color="white" className='py-1 px-1' size={20}  /> */}
            <Sparkles color="white" className='py-1 px-1' size={24} />
        </div>
    </div>
  )
}

export default Bulb