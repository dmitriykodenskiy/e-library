import { createSlice } from '@reduxjs/toolkit'
import getPosts from '../api/service'

const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        setPosts(state, action){
            return action.payload ? action.payload : state
        }
    }
})

export const initializePosts = () => {
    return async dispatch => {
        const posts = await getPosts()
        dispatch(setPosts(posts))
    }
}
export const { setPosts } = postsSlice.actions
export default postsSlice.reducer