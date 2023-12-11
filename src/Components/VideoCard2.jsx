import React from 'react'
import { useNavigate } from 'react-router-dom'

function VideoCard2({video, setMainVideo}) {
       
  const navigate= useNavigate()

  const clickHandler =(e)=>{
               setMainVideo(video)
               navigate('/mainvideo')
  }



  return (
    <div className=' rounded-xl bg-black text-white md:my-5' onClick={(e)=>clickHandler(e)}>
         <div className='max-w-screen-md grid grid-cols-1 md:grid md:grid-cols-3'>
            <div className=' md:rounded-xl overflow-hidden'>
            <img   src={video.snippet.thumbnails.high.url} />
            </div>
            <div className='col-span-2 p-2 md:pt-6'>
            <p className="text-md md:text-2xl ">{video.snippet.description}</p>
            <br></br>
    <p className=" text-sm md:text-xl pl-4 pb-2">{video.snippet.channelTitle}</p>
            </div>


        
         </div>
    </div>
  )
}

export default VideoCard2