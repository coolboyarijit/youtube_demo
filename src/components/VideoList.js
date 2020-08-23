import React from 'react';
import { v4 as u } from 'uuid';

import VideoItem from './VideoItem';

const VideoList = (props) => {
  const renderedList = props.videos.map((v) => {
    return (
      <VideoItem key={u()} video={v} onVideoSelect={props.onVideoSelect} />
    );
  });

  return <div className='ui relaxed divided list" '>{renderedList}</div>;
};

export default VideoList;
