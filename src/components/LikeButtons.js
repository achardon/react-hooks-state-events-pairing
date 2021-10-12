import React from 'react';

function LikeButtons( {video} ) {
    return (
        <>
            <button>
                {video.upvotes} 👍
            </button>
            <button>
                {video.downvotes} 👎
            </button>
        </>
    )
}

export default LikeButtons;