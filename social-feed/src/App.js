import React, { useState } from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import NavBar from "./Components/NavBar/NavBar";
import NewPostForm from "./Components/NewPostForm/NewPostForm";

function App() {
    const [posts, setPosts] = useState([
        {
            userName: "Mike R",
            post: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
            isLiked: false,
            isDisliked: false,
        },
        {
            userName: "Nathan R",
            post: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
            isLiked: false,
            isDisliked: false,
        },
        {
            userName: "Timothy R",
            post: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
            isLiked: false,
            isDisliked: false,
        },
    ]);

    function addNewPost(newPostEntry) {
        let tempNewPostEntry = [newPostEntry, ...posts];
        setPosts(tempNewPostEntry);
    }

    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main className="main-container">
                <div className="form-container">
                    <NewPostForm addNewEntryProperty={addNewPost} />
                </div>
                <div className="feed-container">
                    <DisplayPosts posts={posts} />
                </div>
            </main>
        </div>
    );
}

export default App;
