import JobCard from './cards/JobCard'
import HIWSteps from './cards/HIWSteps'

const HowItWork = () => {
  return (
    <section className='flex flex-col sm:flex-row items-center gap-4 justify-center py-6 px-6'>
        <div className='flex flex-col gap-2 justify-center max-w-[500px]'>
            <h1 className='font-bold text-3xl'>
                How does <br />
                <span className='text-primary-800'>Harvest Data</span> work?
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur. Rhoncus congue nunc pellentesque mauris at. Varius purus vulputate aliquam risus in nec pretium. Elit posuere enim praesent fermentum commodo neque ut. Tortor dignissim 
            </p>
        </div>
        <div className='flex flex-row'>
            <HIWSteps 
                id={1} 
                title='Create Your Account' 
                description='Lorem ipsum dolor sit amet consectetur. Feugiat euismod gravida sem sit. Ac sit aliquam in.'
            />
        </div>
        <div className='flex flex-col'>
            <HIWSteps 
                id={2} 
                title='Create Your Account' 
                description='Lorem ipsum dolor sit amet consectetur. Feugiat euismod gravida sem sit. Ac sit aliquam in.'
            />
            <HIWSteps 
                id={3} 
                title='Create Your Account' 
                description='Lorem ipsum dolor sit amet consectetur. Feugiat euismod gravida sem sit. Ac sit aliquam in.'
            />
        </div>
    </section>
  )
}

export default HowItWork