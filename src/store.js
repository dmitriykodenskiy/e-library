import { configureStore } from '@reduxjs/toolkit'
import paginationReducer from './reducers/paginationReducer'

const store = configureStore({
    reducer: {
      pagination: paginationReducer
    }
})

export default store