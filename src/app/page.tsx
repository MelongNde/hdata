import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import About from '@/components/About'

export default function Home() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`flex justify-center items-center border-b border-gray-200`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary flex justify-center items-start`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Hero />
        </div>
      </div>
      <div className={` flex justify-center items-center bg-primary-800`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Stats />
          
        </div>
      </div>
      
      <div className={`bg-primary sm:px-16 px-6} flex justify-center items-center`}>
        <div className={`xl:max-w-[1280px] w-full`}>
        <About />
      </div>
      </div>
    </div>
  )
}
