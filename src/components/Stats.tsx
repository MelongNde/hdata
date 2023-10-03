import React from 'react'
import { stats } from "@/constants"
import styles from '@/styles/styles'

const Stats = () => {
  return (
    <section className={`flex sm:flex-row flex-col justify-between items-center py-8`}>    
    <div>
      <p className='font-semibold  text-white text-[32px] leading-[43px]'>
      Supporting Job Seekers <br />
      Every Step Of The Way 
      </p>
    </div>
    <div className='flex flex-row'>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-col m-8`} >
          <h4 className="font-semibold xs:text-[40.89px] text-[36px] xs:leading-[53.16px] leading-[43.16px] text-white">
            {stat.value}
          </h4>
          <p className="font-semibold xs:text-[20.45px] text-[16px] xs:leading-[26.58px] leading-[21.58px] text-white">
            {stat.title}
          </p>
        </div>
      ))}
    </div>
    
    </section>
  )
}

export default Stats