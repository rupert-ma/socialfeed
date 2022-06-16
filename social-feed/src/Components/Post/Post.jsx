import React, { useState } from "react";
import DisLikePost from "../LikeDislike/DisLikePost.jsx";
import LikePost from "../LikeDislike/LikePost.jsx";

const Post = ({ post }) => {
    console.log(post);
    return (
        <li>
            <div>
                <div>
                    <p>{post.userName}</p>
                    <p>date</p>
                </div>
                <div>
                    <p>{post.post}</p>
                </div>
                <div>
                    <LikePost
                        likedPostProperty={post.isLiked}
                    />
                    <DisLikePost dislikedPostProperty={post.isDisliked}/>
                </div>
            </div>
        </li>
    );
};

export default Post;
