import React, { useState } from 'react';
import Post from './Post';

const DisplayPosts = ({posts}) => {
    console.log("hello from display posts", posts)
    return (
        <div>
                {posts.map((entry)=>{
                    return (
                    <li><Post post={entry} /></li>)
                }
                    )}
        </div> 
        
    );
}
export default DisplayPosts;