import video from "../data/video.js";
import Video from './Video';
import LikeButtons from './LikeButtons';
import Comments from './Comments';

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      {/* <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      /> */}
      <Video 
      video={video} 
      />
      <LikeButtons
      video={video}
      />
      <Comments
      video={video}
      />
    </div>
  );
}

export default App;
