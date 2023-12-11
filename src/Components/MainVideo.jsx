import React from 'react'
import VideoCard3 from './VideoCard3'

function MainVideo({videos, mainVideo ,setMainVideo}) {
 


  const src=`https://www.youtube.com/embed/${mainVideo.id.videoId}` 


  return    !mainVideo.id  ? <h1>Loading ...</h1> :

    <div className='grid sm:grid-cols-1 md:grid-cols-10 bg-gray-950 text-white'  >
      <div className='md:col-span-7  md:p-20'>
       <div className=' bg-black rounded-2xl'>
       <iframe className='rounded-2xl' width="100%" height="600" src={src} ></iframe>

       <p className='text-xl p-3'>{mainVideo.snippet.description}</p>
      <p className='text-lg p-4'>{mainVideo.snippet.channelTitle}</p>
       </div>
      </div>
      <div className='md:col-span-3  m-4 p-5'>
            
          {videos.map((item, idx)=><VideoCard3 key={idx} video={item} setMainVideo={setMainVideo} />)}
      </div>

    </div>

}

export default MainVideo