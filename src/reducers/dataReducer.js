import { createSlice } from '@reduxjs/toolkit'

const dataSlice = createSlice({
    name: 'data',
    initialState: {},
    reducers: {
        setData(state, action){
            return action.payload ? action.payload : state
        }
    }
})

export const initializeData = (data) => {
    return async dispatch => {
        dispatch(setData(data))
    }
}
export const { setData } = dataSlice.actions
export default dataSlice.reducer