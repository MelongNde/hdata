import Image from "next/image"
import heroBg from "@/assets/HDATABG.png"
import img1 from "@/assets/img-1.jpg"
import img2 from "@/assets/img-2.jpg"
import img3 from "@/assets/img-3.jpg"
import img5 from "@/assets/img-5.jpg"
import img7 from "@/assets/img-7.jpg"
import img8 from "@/assets/img-8.jpg"
import img9 from "@/assets/img-9.jpg"
import  { Sora } from 'next/font/google'
import styles from "@/styles/styles"

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
        {/* <Image src={sideHeroImage} alt="billing" className="w-[100%] h-[100%] relative z-[5]" /> */}
        <div className="grid gap-4 grid-cols-3">
          <div className="rounded-xl h-[170px]">
            <Image style={{objectFit: "fill"}} className="rounded-xl max-w-[170px] max-h-[170px]" alt="image 1"   src={img1} />
          </div>
          <div className="bg-red-600 w-[170px] rounded-xl h-[170px]">3</div>
          <div className="bg-red-600 w-[170px] rounded-xl h-[170px]">3</div>
          <div className="bg-[#71EFA3] w-[170px] rounded-xl h-[170px]">3</div>
          <div className="bg-red-600 w-[170px] rounded-xl h-[170px]">3</div>
          <div className="bg-[#A076F9] w-[170px] rounded-xl h-[170px]">3</div>
          <div className="bg-red-600 w-[170px] rounded-xl h-[170px]">3</div>
          <div className="bg-red-600 w-[170px] rounded-xl h-[170px]">3</div>
          <div className="bg-red-600 w-[170px] rounded-xl h-[170px]">3</div>
        </div>
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  )
}

export default Hero