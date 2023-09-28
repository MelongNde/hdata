import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={` flex justify-center items-center`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary flex justify-center items-start`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Hero />
        </div>
      </div>
      
      <div className={`bg-primary sm:px-16 px-6} flex justify-center items-center`}>
        <div className={`xl:max-w-[1280px] w-full`}>
        </div>
      </div>
    </div>
  )
}
