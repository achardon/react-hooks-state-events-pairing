import React, { useState } from 'react';
import Comment from './Comment';

function Comments ( {video, currentComments, handleDelete} ) {

    let [commentButton, setCommentButton] = useState('Hide Comments')

    function handleClick() {
        setCommentButton(commentButton === 'Hide Comments' ? commentButton = 'Show Comments' : commentButton = 'Hide Comments')
    }

    const comments = currentComments.map(comment => {
        return (
            <Comment
                key={comment.id}    
                comment={comment.comment}
                user={comment.user}
                id={comment.id}
                handleDelete={handleDelete}
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
            <div>
                <h2>{currentComments.length} Comments</h2>
                {comments}
            </div>
            : null }
            
        </div>
    )
}

export default Comments;