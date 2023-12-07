import React from "react";

function VideoCard({ video }) {
  console.log(video);
  return <div className="bg-black text-white rounded-xl">
    <div className="mb-4 h-48 md:h-40 md:rounded-xl overflow-hidden">
    <img   src={video.snippet.thumbnails.high.url} />
    </div>
    <p className="text-md pl-4">{video.snippet.description}</p>
    <p className="text-sm pl-4 pb-2">{video.snippet.channelTitle}</p>
    </div>;
}

export default VideoCard;
