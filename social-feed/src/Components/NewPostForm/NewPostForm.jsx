import React, { useState } from 'react';

const NewPostForm = ({addNewEntryProperty}) => {
    const [userName, setUserName] = useState('');
    const [post, setPost] = useState('');
    const [isLiked, setIsLiked] = useState('');
    const [isDisLiked, setDisLiked] = useState('');

    function handleSubmit(formEvent){
        formEvent.preventDefault();
        let newPostEntry = {
            userName: userName,
            post: post,
            isLiked:false, 
            isDisliked:false
        };
        addNewEntryProperty(newPostEntry);
        setUserName('');
        setPost('')
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>User Name: </label>
            <input type='text' value={userName} onChange={(event)=>setUserName(event.target.value)}></input>
            <label>Post: </label>
            <input type='text' value={post} onChange={(event)=>setPost(event.target.value)}></input>
            <button type='submit'>Submit</button>
        </form>
     );
}
 
export default NewPostForm;
