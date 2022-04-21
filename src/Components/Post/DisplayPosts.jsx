const DisplayPost = (props) => {

    return(
        <div>
            {props.parentPost.map((post, index) => {
                return(
                    <tr key={index}>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{post.name}</td>
                        </tr>
                        <tr>
                            <td>{post.post}</td>
                        </tr>
                    </tr>
                );
            })}
        </div>
    );
}

export default DisplayPost;