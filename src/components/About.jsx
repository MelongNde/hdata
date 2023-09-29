import Image from "next/image"
import about from "@/assets/aboutus.svg"

const About = () => {
  return (
    <div className='flex sm:p-3 md:
     sm:flex-row flex-col items-center justify-between py-12'>
        <div className=''>
            <Image alt="About image side" className="max-w-[645px]" src={about} />
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
    </div>
  )
}

export default About