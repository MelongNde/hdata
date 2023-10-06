import { Bookmark } from "lucide-react"


const JobCard = () => {
  return (
    <div className="px-4 py-4 mt-8 rounded-lg border-[2px] border-opacity-50 border-dark-100">
      <header className="mt-2 border-b-[1px]  border-dark-100">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h2 className="font-semibold text-lg text-slate-900">Job Name</h2>
            <h2 className="font-semibold text-sm text-slate-900">Job Location - <span>Country</span></h2>
          </div>     
          <Bookmark />
        </div>
        <div className="flex flex-row py-2 gap-2  justify-start items-start">
          <a href="/" className="py-1 px-2 text-xs font-medium rounded-md  text-primary-700 bg-primary-50 bg-opacity-40 border border-primary-700 hover:bg-opacity-100">Job category 1</a>
          <a href="/" className="py-1 px-2 text-xs font-medium rounded-md  text-primary-700 bg-primary-50 bg-opacity-40 border border-primary-700 hover:bg-opacity-100">Job category 2</a>
        </div>
      </header>
      <div className="flex flex-row mt-2 gap-2  justify-start items-start">
        <div className="flex flex-col py-1">
          <p className="font-medium text-xs text-dark-600">Experience</p>
          <p className="font-medium text-base text-dark-950">5 Years</p>
        </div>
        <div className="flex flex-col py-1">
          <p className="font-medium text-xs text-dark-600">Education</p>
          <p className="font-medium text-base text-dark-950">5Master degree</p>
        </div>        
      </div>
      <div className="flex flex-row mt-2 gap-2">
        <div className="py-1 px-4 text-primary-700 font-medium text-xs bg-primary-300 rounded-3xl ">$73,141+ monthly</div>
        <div className="py-1 px-4 text-[#FB743C] text-xs font-medium bg-[#FFE1CC]   rounded-3xl ">Full time</div>
      </div>
      <p className="mt-4 whitespace-normal text-justify text-dark-800 text-sm">
        Lorem ipsum dolor sit amet consectetur. Massa mauris erat interdum est egestas sodales arcu adipiscing. Sodales mauris massa convallis sed viverra diam facilisis. Nec pulvinar.
      </p>
      <button type="button" className="mt-4 w-full justify-center bg-primary-700 py-3 hover:bg-primary-800 font-medium text-white rounded-md">
        Get the job
      </button>
    </div>
  
  
  )
}

export default JobCard