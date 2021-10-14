import React from "react"
import VideoItem from "./VideoItem"

const VideoList = ({videos, onVideoSelect}) => {
    // console.log("props",props)
    const videoList = videos.map((video) => {
        // console.log(video)
        return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
    }
   )
        

    
    return <div className="ui relaxed divided list">{videoList}</div>
}

export default VideoList