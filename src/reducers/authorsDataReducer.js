import { createSlice } from '@reduxjs/toolkit'

const authorsDataSlice = createSlice({
    name: 'authorsData',
    initialState: {},
    reducers: {
        setAuthorsData(state, action){
            return action.payload ? action.payload : state
        }
    }
})

export const initializeAuthorsData = (data) => {
    return async dispatch => {
        dispatch(setAuthorsData(data))
    }
}
export const { setAuthorsData } = authorsDataSlice.actions
export default authorsDataSlice.reducer