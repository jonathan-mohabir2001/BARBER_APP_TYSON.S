import React from 'react'
import video from './components/media/Video.mp4'; 


function VideoComponent() {
  return (
    <div>
     <video src= {video} type ="video/mp4">

     </video>

    </div>
  )
}

export default VideoComponent
