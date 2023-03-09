import { configureStore } from '@reduxjs/toolkit'
import headerReducer from './reducers/headerReducer'

const store = configureStore({
    reducer: {
      header: headerReducer
    }
})

export default store