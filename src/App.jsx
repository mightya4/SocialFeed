import React, { useState } from "react";
import CreatePost from './Components/Post/CreatePost'
import DisplayPost from "./Components/Post/DisplayPosts";
function App() {

  const [name, setName] = useState([])



  return(
    <div>
        <CreatePost/>
        <DisplayPost/>
    </div>
);
}

export default App;
