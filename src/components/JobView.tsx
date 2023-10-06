import JobCard from "./cards/JobCard"

const JobView = () => {
  return (
    <section className='flex flex-col'>
        <h1 className='text-dark-950 text-3xl text-center  font-semibold'>
            We Empower job seekers like you to <br />
            streamline and supercharge your job search
        </h1>
        <p className='text-dark-700 text-sm font-medium text-center  mt-2 alignt'>
            Unlock Your Potential and discover a world of opportunities <br />
            that align with your skills, Interests, and aspirations
        </p>
        <div className="grid grid-col-4 grid-flow-col gap-4">
            <JobCard />
            <JobCard />
            <JobCard />
        </div>
    </section>
  )
}

export default JobView