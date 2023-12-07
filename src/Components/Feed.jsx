import React from 'react'
import VideoCard from './VideoCard'

function Feed({videos}) {
  return  !videos ?"Loading..." :<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5 gap-4 bg-gray-900'>
  {
    videos.map((item,idx)=> <VideoCard key={idx} video={item} />)
  }
  </div>
}

export default Feed