import React, { useState } from 'react';
import Comment from './Comment';

function Comments ( {video} ) {

    let [commentButton, setCommentButton] = useState('Hide Comments')

    function handleClick() {
        setCommentButton(commentButton === 'Hide Comments' ? commentButton = 'Show Comments' : commentButton = 'Hide Comments')
    }

    const comments = video.comments.map(comment => {
        return (
            <Comment
                key={comment.id}    
                comment={comment.comment}
                user={comment.user}
                id={comment.id}
            />
        )
    })

    return (
        <div>
            <br />
            <button
            onClick={handleClick}
            >{commentButton}</button>
        
            {commentButton === 'Hide Comments' ?
            <h2>{video.comments.length} Comments</h2>
            : null }
            
            {commentButton === 'Hide Comments' ?
            <>{comments}</>
            : null }
            
        </div>
    )
}

export default Comments;