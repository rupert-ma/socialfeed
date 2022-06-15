import React, { useState } from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import NewPostForm from "./Components/NewPostForm/NewPostForm";

function App() {

  const [posts, setPosts] = useState([
    {userName:"Mike R", post:"insert post text here", isLiked:false, isDisliked:false}, {userName:"Nathan R", post:"insert post text here", isLiked:false, isDisliked:false}
  ]);

  function addNewPost(newPostEntry){
    let tempNewPostEntry = [...posts, newPostEntry];
    setPosts(tempNewPostEntry);

  }

  return (
    <div>
      <div>
          <DisplayPosts posts={posts}/>  
      </div>
      <div>
        <NewPostForm addNewEntryProperty={addNewPost} />
      </div>
    </div>
  );
}

export default App;
