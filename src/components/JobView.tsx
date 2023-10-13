import JobCard from "./cards/JobCard"

const JobView = () => {
  return (
    <section className='flex flex-col gap-4'>
        <h1 className='text-dark-950 text-3xl text-center  font-semibold'>
            We Empower job seekers like you to <br />
            streamline and supercharge your job search
        </h1>
        <p className='text-muted-foreground  font-medium text-center  mt-2 alignt'>
            Unlock Your Potential and discover a world of opportunities <br />
            that align with your skills, Interests, and aspirations
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
        </div>
    </section>
  )
}

export default JobView