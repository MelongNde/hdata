import { type } from "os"

type Props = {
    id: number,
    title: string,
    description: string
}

const HIWSteps = ({id, title, description}: Props) => {
  return (
    <div className="group flex flex-col justify-between gap-3 items-start py-6 px-9 rounded-3xl hover:bg-primary hover:text-white transition ease-in-out delay-150  hover:shadow-2xl">
        <div className="text-white text-2xl font-bold rounded-full group-hover:bg-white group-hover:text-primary bg-primary transition ease-in-out delay-200 px-5 py-2">
            {id}
        </div>
        <h1 className="font-bold">{title}</h1>
        <p className="font-medium text-[14px]">{description}</p>
    </div>
  )
}

export default HIWSteps