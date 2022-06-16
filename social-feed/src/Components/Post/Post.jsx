import React, { useState } from "react";
import DisLikePost from "../LikeDislike/DisLikePost.jsx";
import LikePost from "../LikeDislike/LikePost.jsx";

const Post = ({ post }) => {
    console.log(post);
    return (
        <li className="post-container">
            <div>
                <div>
                    <p className="userName">{post.userName}</p>
                    {/* <p>date</p> */}
                </div>
                <div>
                    <p>{post.post}</p>
                </div>
                <div className="like-container">
                    <LikePost
                        likedPostProperty={post.isLiked}
                        dislikedPostProperty={post.isDisliked}
                    />
                    <DisLikePost
                        likedPostProperty={post.isLiked}
                        dislikedPostProperty={post.isDisliked}
                    />
                </div>
            </div>
        </li>
    );
};

export default Post;
