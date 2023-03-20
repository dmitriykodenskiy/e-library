import { createSlice } from '@reduxjs/toolkit'

const paginationSlice = createSlice({
    name: 'pagination',
    initialState: 'load_more',
    reducers: {
        setPaginationType(state, action){
            return action.payload ? action.payload : state
        }
    }
})

export const changePaginationType = (type) => {
    return async dispatch => {
        dispatch(setPaginationType(type))
    }
}
export const { setPaginationType } = paginationSlice.actions
export default paginationSlice.reducer