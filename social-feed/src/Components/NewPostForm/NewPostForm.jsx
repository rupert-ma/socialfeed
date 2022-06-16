import React, { useState } from "react";

const NewPostForm = ({ addNewEntryProperty }) => {
    const [userName, setUserName] = useState("");
    const [post, setPost] = useState("");
    const [isLiked, setIsLiked] = useState("");
    const [isDisLiked, setDisLiked] = useState("");

    function handleSubmit(formEvent) {
        formEvent.preventDefault();
        let newPostEntry = {
            userName: userName,
            post: post,
            isLiked: false,
            isDisliked: false,
        };
        addNewEntryProperty(newPostEntry);
        setUserName("");
        setPost("");
    }

    return (
        <form onSubmit={handleSubmit} className="form-styling">
            <div>
                <label>Name: </label>
                <input
                    className="nameInputTextBox"
                    type="text"
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                ></input>
            </div>
            <div>
                <label className="post-label">Post: </label>
                <textarea
                    className="postInputTextBox"
                    type="text"
                    value={post}
                    onChange={(event) => setPost(event.target.value)}
                ></textarea>
            </div>
            <button type="submit">Create</button>
        </form>
    );
};

export default NewPostForm;
