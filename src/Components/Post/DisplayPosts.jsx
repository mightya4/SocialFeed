const DisplayPost = (props) => {

    return(
        <div>
            <div>
            {props.parentPost.map((post, index) => {
                return(
                    <tr key={index}>
                        <tr>
                            <td>{post.name}</td>
                        </tr>
                        <tr>
                            <td>{post.post}</td>
                        </tr>
                    </tr>
                );
            })}
            </div>
        </div>
    );
}

export default DisplayPost;