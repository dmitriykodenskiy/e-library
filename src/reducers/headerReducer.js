import { createSlice } from '@reduxjs/toolkit'
import Stack from "../sdk/entry"

const headerSlice = createSlice({
    name: 'header',
    initialState: {},
    reducers: {
        testReducer(state, action){
            const {title, homeLink} = action.payload
            return {...state, title: title, homeLink: homeLink}
        }
    }
})

export const testAction = () => {
    return async dispatch => {
        const header = await Stack.getEntry("header", "en-us")
        const headerObj = header[0][0]
        const result = {
            title: headerObj?.title,
            homeLink: headerObj.home_link?.href
        }
        dispatch(testReducer(result))
    }
}
export const { testReducer } = headerSlice.actions
export default headerSlice.reducer
