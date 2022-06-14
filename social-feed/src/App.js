import React, { useState } from "react";
import DisplayPosts from "./Components/DisplayPosts";

function App() {

  const [posts, setPosts] = useState([
    {userName:"Mike R", post:"insert post text here"}, {userName:"Nathan R", post:"insert post text here"}
  ]);

  return (
    
    <div>
        <DisplayPosts posts={posts}/>  
    </div>
  );
}

export default App;
