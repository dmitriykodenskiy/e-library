import store from "../store"
import Post from "./Post";

const Posts = () => {
    const posts = store.getState().posts
    return (
        <div className="posts">
            <h1>Posts</h1>
            <ul className='postsList'>
                {posts.map(post => <Post postData={post} key={post.id}/>)}
            </ul>
        </div>
    )
}

export default Posts