import { createSlice } from "@reduxjs/toolkit";

export const loginSlice=createSlice({
    name:'login',
    initialState:{
       user:null
    },
    reducers:{
        remainLoggedin:(state,action)=>{
            state.user=action.payload
        },
        removeLoggedin:(state)=>{
            state.user=null

        }
        
    }
})

export const {remainLoggedin,removeLoggedin}=loginSlice.actions
export default loginSlice.reducer