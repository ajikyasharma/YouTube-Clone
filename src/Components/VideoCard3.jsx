import React from 'react'
import { useNavigate } from 'react-router-dom'

function VideoCard3({video, setMainVideo}) {
       
  const navigate= useNavigate()

  const clickHandler =(e)=>{
    console.log("hello")
               setMainVideo(video)

  }



  return (
    <div className=' rounded-xl bg-black text-white overflow-hidden mb-3' onClick={(e)=>clickHandler(e)}>
         <div className='max-w-screen-sm grid grid-cols-3 '>
            <div className=' rounded-xl overflow-hidden'>
            <img   src={video.snippet.thumbnails.high.url} />
            </div>
            <div className='col-span-2 '>
            <p className=" text-sm pl-2 ">{video.snippet.description}</p>
    <p className=" text-sm text-gray-500 pl-3 ">{video.snippet.channelTitle}</p>
            </div>


        
         </div>
    </div>
  )
}

export default VideoCard3