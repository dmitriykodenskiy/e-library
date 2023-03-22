import { configureStore } from '@reduxjs/toolkit'
import paginationReducer from './reducers/paginationReducer'
import dataReducer from './reducers/dataReducer'
import postsReducer from './reducers/postsReducer'

const store = configureStore({
    reducer: {
      pagination: paginationReducer,
      data: dataReducer,
      posts: postsReducer
    }
})

export default store