import React, { useState } from "react";
import Post from "../Post/Post.jsx";

const DisplayPosts = ({ posts }) => {
    return (
        <ul>
            {posts.map((entry, index) => {
                return <Post key={index} post={entry} />;
            })}
        </ul>
    );
};
export default DisplayPosts;
