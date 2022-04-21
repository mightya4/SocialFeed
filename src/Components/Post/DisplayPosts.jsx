const DisplayPost = (props) => {

    return(
        <div>
            <div>
            {props.parentPost.map((post, index) => {
                return(
                    <tr key={index}>
                        <tr>
                            <td><b>{post.name}</b></td>
                        </tr>
                        <br></br>
                        <tr>
                            <td>{post.post}</td>
                        </tr>
                        <br></br>
                        <br></br>
                    </tr>
                    
                    
                );
            })}
            </div>
        </div>
    );
}

export default DisplayPost;