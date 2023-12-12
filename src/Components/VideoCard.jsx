import React from "react";
import { useNavigate } from "react-router-dom";

function VideoCard({ video, setMainVideo }) {
 
  const navigate= useNavigate()

  const clickHandler =(e)=>{
      setMainVideo(video)
      navigate('/mainvideo')
  }
  
  return <div className="bg-black text-white rounded-xl p-2 cursor-pointer overflow-hidden" onClick={(e)=>clickHandler(e)}>
    <div className="mb-3 h-48 md:h-40 md:rounded-xl overflow-hidden">
    <img   src={video.snippet.thumbnails.high.url} />
    </div>
    <p className="text-md pl-4">{video.snippet.description}</p>
    <p className="text-sm text-gray-500 pl-4 pb-2 ">{video.snippet.channelTitle}</p>
    </div>;
}

export default VideoCard;
