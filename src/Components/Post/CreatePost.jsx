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
        <form onSubmit={handleCreatePost} className='form-grid'>
            <div className="form-group">
                <label>Name</label>
                <input type='text' className="form-control" value= {name} onChange={(event) => {setName(event.target.value)}}></input>
            </div>
            <div className="form-group">
                <label>Post</label>
                <input type='text' className="form-control" value= {post} onChange={(event) => {setPost(event.target.value)}}></input>
            </div>
            <button type='submit'>Create</button>
        </form>
    );
}

export default CreatePost;