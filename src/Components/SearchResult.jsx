import React from 'react'
import VideoCard2 from './VideoCard2'

function SearchResult({videos, setMainVideo}) {
  return (
    <div className='p-10 bg-gray-950'>

    {videos.map((item, idx)=> <VideoCard2 key={idx}  video={item} setMainVideo={setMainVideo}/>)}
    </div>
  )
}

export default SearchResult