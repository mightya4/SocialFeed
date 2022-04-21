import React, { useState } from "react";
const CreatePost = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleCreatePost(event){
        event.preventDefault();
        let postEntry = {
            name: name,
            post: post,
        };
    }
    return(
        <form onSubmit={handleCreatePost}>
            <div>
                <label>Name</label>
                <input type='text' value= {name} onChange={(event) => {setName(event.target.value)}}></input>
            </div>
            <div>
                <label>Post</label>
                <input type='text' value= {post} onChange={(event) => {setPost(event.target.value)}}></input>
            </div>
            <button type='submit'>Create</button>
        </form>
    );
}

export default CreatePost;