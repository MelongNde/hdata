'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import HowItWork from '@/components/HowItWork'
import JobView from '@/components/JobView'

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <div className={`flex justify-center items-center border-b border-gray-200`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Navbar />
        </div>
      </div>

      <div className={` flex justify-center items-start`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary bg-gradient flex justify-center items-center -800`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Stats />
          {/* <About /> */}
          {/* <Image alt="About image side"  className="max-full" src={about} /> */}
          {/* <VideoBG /> */}
        </div>
      </div>
      
      <div className={` sm:px-16 px-6 flex justify-center items-center`}>
        <div className={`xl:max-w-[1280px]  w-full`}>
        
        <HowItWork />
        <JobView />
      </div>
      </div>
    </div>
  )
}
