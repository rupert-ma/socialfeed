import React, { useState } from 'react';
import Post from '../Post/Post.jsx';


const DisplayPosts = ({posts}) => {
    console.log("hello from display posts", posts)
    return (
        <div>
                {posts.map((entry, index)=>{
                    return (
                    <Post key={index} post={entry} />)
                }
                    )}
        </div> 
        
    );
}
export default DisplayPosts;