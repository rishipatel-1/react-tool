import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slice/Userslice";

const store = configureStore({
    reducer:{
        users:userSlice.reducer,
    },
})

export default store;