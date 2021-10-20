import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) =>{

    return (
    <div>
        video {props.num}
        <VideoItem />
    </div>
    );
};

export default VideoList;