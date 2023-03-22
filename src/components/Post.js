const Post = ({postData: {title, body}}) => {
    return (
        <li className="postItem">
            <div className="postWrapper">
                <h2 className="postTitle">{title}</h2>
                <div className="postDesc">{body}</div>
            </div>
        </li>
    )
}

export default Post