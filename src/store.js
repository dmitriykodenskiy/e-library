import { configureStore } from '@reduxjs/toolkit'
import paginationReducer from './reducers/paginationReducer'
import booksDataReducer from './reducers/booksDataReducer'
import postsReducer from './reducers/postsReducer'

const store = configureStore({
    reducer: {
      pagination: paginationReducer,
      booksData: booksDataReducer,
      posts: postsReducer
    }
})

export default store