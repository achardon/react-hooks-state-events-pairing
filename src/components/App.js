import React, {useState} from 'react';
import video from "../data/video.js";
import Video from './Video';
import LikeButtons from './LikeButtons';
import Comments from './Comments';

function App() {
  //console.log("Here's your data:", video);

  const [upvotesCount, setUpvotesCount] = useState(video.upvotes)
  const [downvotesCount, setDownvotesCount] = useState(video.downvotes)

  const [currentComments, setComments] = useState(video.comments)

  function handleUpClick() {
    setUpvotesCount(() => upvotesCount + 1)
  }

  function handleDownClick() {
    setDownvotesCount(() => downvotesCount +1)
  }

  function handleDelete(e, id) {
    const updatedComments = currentComments.filter(comment => comment.id !== id)
    setComments(updatedComments)
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
      currentComments={currentComments}
      handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
