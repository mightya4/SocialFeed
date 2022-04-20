import React, { useState } from "react";
const CreatePost = () => {

    const [createPost, setCreatePost] = useState([])
    
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>David Lagrange</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Post</th>
                        <th>"I love playing guitar. Does anyone want to play with me?"</th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CreatePost;