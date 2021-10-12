import React, {useState} from 'react';

function Comment( {comment, user, id, handleDelete} ) {
    
    let [upvotes, setUpvote] = useState(0)
    let [downvotes, setDownvotes] = useState(0)

    function handleUpClick() {
        setUpvote(() => upvotes + 1)
    }
    
    function handleDownClick() {
        setDownvotes(() => downvotes + 1)
    }

    return (
        <div>
            <strong>{user}</strong>
            <p>{comment}</p>
            <button
            onClick={handleUpClick}
            >{upvotes} 👍</button>
            <button
            onClick={handleDownClick}
            >{downvotes} 👎</button>
            <br/>
            <button
            onClick={(e) => handleDelete(e, id)}
            >Remove Comment </button>
            <br/>
            <br/>
        </div>
    )
}

export default Comment;