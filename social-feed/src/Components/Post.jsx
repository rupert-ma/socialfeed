import React, { useState } from "react";

const Post = ({post}) => {
console.log(post)
    return (
        <div>
            <div>
                <p>{post.userName}</p>
                <p>date</p>
            </div>
            <div>
                <p>{post.post}</p>
            </div>
            <div>
                <button>Like</button>
                <button>Dislike</button>
            </div>
        </div>
    );
};

export default Post;
