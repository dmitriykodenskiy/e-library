import { createSlice } from '@reduxjs/toolkit'

const booksDataSlice = createSlice({
    name: 'booksData',
    initialState: {},
    reducers: {
        setBooksData(state, action){
            return action.payload ? action.payload : state
        }
    }
})

export const initializeBooksData = (data) => {
    return async dispatch => {
        dispatch(setBooksData(data))
    }
}
export const { setBooksData } = booksDataSlice.actions
export default booksDataSlice.reducer