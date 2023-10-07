'use client'
// import video from "../../public/hdata.mp4"

import React, { useEffect, useRef } from "react"
import { Video, CloudinaryContext } from "cloudinary-react"
import { CldVideoPlayer } from "next-cloudinary"
import { useInView } from "react-intersection-observer"

const VideoBG = React.memo(({ videoref }) => {
  return (
    // <CldVideoPlayer 
    //   width={100}
    //   height={100}
    //   src="https://www.youtube.com/watch?v=5CDCycp6L4c"
    // />
    <CloudinaryContext>
        <Video 
          width={100}
          height={100}
          src="https://www.youtube.com/watch?v=5CDCycp6L4c"
        />
    </CloudinaryContext>
    
  )
})

export default VideoBG