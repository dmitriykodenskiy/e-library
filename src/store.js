import { configureStore } from '@reduxjs/toolkit'
import paginationReducer from './reducers/paginationReducer'
import dataReducer from './reducers/dataReducer'

const store = configureStore({
    reducer: {
      pagination: paginationReducer,
      data: dataReducer
    }
})

export default store