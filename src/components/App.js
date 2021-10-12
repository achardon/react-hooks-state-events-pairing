import React, {useState} from 'react';
import video from "../data/video.js";
import Video from './Video';
import LikeButtons from './LikeButtons';
import Comments from './Comments';

function App() {
  //console.log("Here's your data:", video);

  const [upvotesCount, setUpvotesCount] = useState(video.upvotes)
  const [downvotesCount, setDownvotesCount] = useState(video.downvotes)

  function handleUpClick() {
    setUpvotesCount(() => upvotesCount + 1)
  }

  function handleDownClick() {
    setDownvotesCount(() => downvotesCount +1)
  }

  return (
    <div className="App">
      <Video 
      video={video} 
      />
      <LikeButtons
      video={video}
      upvotesCount={upvotesCount}
      downvotesCount={downvotesCount}
      handleUpClick={handleUpClick}
      handleDownClick={handleDownClick}
      />
      <Comments
      video={video}
      />
    </div>
  );
}

export default App;
