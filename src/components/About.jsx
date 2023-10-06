import Image from "next/image"
import about from "@/assets/aboutus.png"
import { CheckCheck } from "lucide-react"

const About = () => {
  return (
    <section id="features" className='flex sm:p-3 md:
     sm:flex-row flex-col items-center justify-between sm:py-16 py-6 '>
        <div className=''>
            <Image alt="About image side" className="max-w-[521px]" src={about} />
        </div>
        <div className="flex flex-col gap-6">
            <h1 className="font-bold text-[26px] ">
                The things you care about job <br />
                matter to Harvest Data 
            </h1>
            <p className="font-medium"> Unlock Your Potential and discover a world of opportunities <br />
                that align with your skills, Interests, and aspirations
            </p>
            <div className="">
                <button type="button" className="text-white py-4 px-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
            </div>
        </div>
        <div className="flex left-[30%] top-[160%] bg-white rounded-xl shadow-xl flex-raw justify-between items-center absolute z-1 p-4 y-4 gap-3">
            <div className="">
                <div className="py-3 px-3 rounded-full bg-[#198754ab]">
                    <div className="py-2 px-2 rounded-full bg-[#198754ab]">   
                        <CheckCheck color="white" className=" rounded-full " />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-1  ">
                <p className="font-bold text-[18px]">Successfully applied for the job</p>
                <p className="font-normal text-dark-600">
                Thank you for your application. <br /> 
                Your application has been sent to our recruitment <br /> team. We will send you a quote as soon as possible.
                </p>
            </div>
        </div>
    </section>
  )
}

export default About