import React from 'react';

function LikeButtons( {video, upvotesCount, downvotesCount, handleUpClick, handleDownClick} ) {

    return (
        <>
            <button
            onClick={handleUpClick}
            >
                {upvotesCount} 👍
            </button>
            <button
            onClick={handleDownClick}
            >
                {downvotesCount} 👎
            </button>
        </>
    )
}

export default LikeButtons;