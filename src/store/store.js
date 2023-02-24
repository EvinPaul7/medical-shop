import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '../store/loginSlice.js'

var store=configureStore({
    reducer:{
        login:loginReducer
    }
})

export default store;