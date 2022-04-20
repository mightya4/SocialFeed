import React, { useState } from "react";
import CreatePost from './Components/ManipulatePost/CreatePost'
import DisplayPost from "./Components/ManipulatePost/DisplayPosts";
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
