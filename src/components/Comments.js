import React from 'react';
import Comment from './Comment';

function Comments ( {video} ) {
    return (
        <div>
            <br />
            <button>Hide Comments</button>
            <h2>{video.comments.length} Comments</h2>
            {video.comments.map(comment => {
                return (
                    <Comment
                        key={comment.id}    
                        comment={comment.comment}
                        user={comment.user}
                        id={comment.id}
                    />
                )
            })}
        </div>
    )
}

export default Comments;