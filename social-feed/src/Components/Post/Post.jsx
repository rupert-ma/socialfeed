import React, { useState } from "react";
import LikePost from '../LikeDislike/LikePost.jsx'
import DisLikePost from '../LikeDislike/DisLikePost.jsx'

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
                <LikePost likedPostProperty={post.isLiked} dislikedPostProperty={post.isDisliked} />
                {/* <DisLikePost /> */}
            </div>
        </div>
    );
};

export default Post;
