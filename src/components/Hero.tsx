import Image from "next/image"
import heroBg from "@/assets/HDATABG.png"
import sideHeroImage from "@/assets/side-hero-image.png"
import img1 from "@/assets/img-1.png"
import img2 from "@/assets/img-2.png"
import img3 from "@/assets/img-3.png"
import img4 from "@/assets/img-4.png"
import img5 from "@/assets/img-5.png"
import img6 from "@/assets/img-6.png"
import img7 from "@/assets/img-7.png"
import img8 from "@/assets/img-8.png"
import img9 from "@/assets/img-9.png"
import  { Sora } from 'next/font/google'
import styles from "@/styles/styles"
import Bulb from '@/components/Bulb'

const sora = Sora({
  weight: ['100', '200','300', '400', "500", "600", "700", "800"],
  subsets: ['latin']
})

const Hero = () => {
  return (
    <section id="home" className="flex md:flex-row flex-col sm:py-16 py-6">
      <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <p className="font-normal text-dark-800 text-[18px] leading-[30.8px]">
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div> */}
        <div className={ ` ${sora.className} font-black flex flex-row justify-between items-center w-full`}>
          <h1 className="flex-1 font-poppins font-black  ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]">
          <span className="text-dark-950">Find The</span>  <br className="sm:block hidden" />{" "}
            <span className="text-gradient ">Perfect Job </span>{" "}
          </h1>
        </div>
        <h1 className={`${sora.className} text-dark-950 font-poppins font-black ss:text-[68px] text-[52px] ss:leading-[100.8px] leading-[75px] w-full`}>
        You Deserves
        </h1>
        <p className={`${sora.className} text-dark-900 text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>
          We utilize our strengths to facilitate the success of our participants, 
          enabling them to establish enduring careers that benefit themselves,
          their families, and the community as a whole.
        </p>
        <div className="flex justify-self-center text-center flex-row md:flex-row gap-6 mt-5">
               <div className="">
                 <button type="button" className="text-white py-4 px-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
               </div>
               <div className="">
                 <button type="button" className="text-white py-4 px-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">How It work ?</button>
               </div>
           </div>
      </div>
      <div className={`flex-1 flex justify-center items-center md:my-0 my-10 relative`}>
        {/* <Image src={img1} alt="billing" className="w-[100%] h-[100%] relative z-[5]" /> */}
        <div className="grid gap-4 grid-cols-3">
          <div >
            <Image width={170}className="rounded-md " objectFit="contain" alt="image 1"   src={img1} />
          </div>
          <div >
            <Image width={170}className="rounded-md " objectFit="contain" alt="image 1"   src={img2} />
          </div>
          <div >
            <Image width={170}className="rounded-md " objectFit="contain" alt="image 1"   src={img3} />
          </div>
          <div >
            <Image width={170}className="rounded-md " objectFit="contain" alt="image 1"   src={img8} />
          </div>
          <div >
            <Image width={170}className="rounded-md " objectFit="contain" alt="image 1"   src={img4} />
          </div>
          <div >
            <Image width={170}className="rounded-md " objectFit="contain" alt="image 1"   src={img9} />
          </div>
          <div >
            <Image width={170}className="rounded-md " objectFit="contain" alt="image 1"   src={img5} />
          </div>
          <div >
            <Image width={170}className="rounded-md " objectFit="contain" alt="image 1"   src={img6} />
          </div>
          <div >
            <Image width={170}className="rounded-md " objectFit="contain" alt="image 1"   src={img7} />
          </div>
        </div>
        {/* gradient start */}
        <Bulb position="left-4" text="Personalized Job Alert"/>
        <Bulb position="top-24 right-28" text="Builded Resume"/>
        <Bulb position="right-4 top-30" text="Receive instant update"/>
        <Bulb position="bottom-4 " text="Robust search engine"/>
        {/* <Bulb />
        <Bulb text={undefined} className={undefined} /> */}
        {/* gradient end */}
      </div>
    </section>
  )
}

export default Hero