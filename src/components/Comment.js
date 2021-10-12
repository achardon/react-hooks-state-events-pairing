import React from 'react';

function Comment( {comment, user, id} ) {
    return (
        <div>
            <strong>{user}</strong>
            <p>{comment}</p>
        </div>
    )
}

export default Comment;