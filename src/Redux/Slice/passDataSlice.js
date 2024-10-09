import { createSlice } from "@reduxjs/toolkit";
const passDataSlice=createSlice({
    name:'passDataSlice',
    initialState:{
        passDataSliceObj:{}
    },
    reducers:{
        passDataObj(state,action){
            state.passDataSliceObj=action.payload
            console.log('pass data slice obj',state.passDataSliceObj)
        }
    }
})
export const passDataSliceActions=passDataSlice.actions
export default passDataSlice.reducer