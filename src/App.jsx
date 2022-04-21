import React, { useState } from "react";
import Post from "./Components/Post/Post";
function App() {

  const [name, setName] = useState([])



  return(
    <div>
        <Post/>
    </div>
);
}

export default App;
