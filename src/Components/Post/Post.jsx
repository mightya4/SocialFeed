import {useState} from 'react';
import CreatePost from './CreatePost';
import DisplayPost from './DisplayPosts';
import './Post.css'

const Post = (props) => {

    const [posts, setPost] = useState([{name: 'David Lagrange', post: "I recently went into the woods to search for the oldest tree I could find. To my luck I found a very old hemlock around 200 - 250 years old. Let me know if you would like me to show it to you!"}, {name: 'JJ Vega', post: "Its April Fools Day! Give this a dislike if you really like it. :)"}, {name: 'Nevin Seibel', post: "My Rubik's cube is fully charged and ready for battle. Right after I eat my meal that has appeared from the magical hand from behind my curtain."}]);
    function addNewPost(post){
        let tempPost = [...posts, post]
        
        setPost(tempPost);
    }
    return(
        <div>
            <div className='post-border-box'>
                <CreatePost parentPost={addNewPost}/>
            </div>
            <div className='post-border-box'>
                <div >
                    <table>
                        <DisplayPost parentPost={posts}/>
                    </table>
                </div>
            </div>
            
        </div>
    );
}

export default Post;