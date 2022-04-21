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
                <input type='text'></input>
            </div>
            <div>
                <label>Post</label>
                <input type='text'></input>
            </div>
            <button type='submit'>Create</button>
        </form>
    );
}

export default CreatePost;