import { createSlice } from "@reduxjs/toolkit";
import { clearAllUser } from "../actions";

const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
        },
        removeUser(state,action){
            state.splice(action.payload,1)
        },
        // clearUsers(state,action){
        //    return [];
        // }
       
    },
    extraReducers(buider){
        buider.addCase(clearAllUser,(state,action)=>{
            return [];
        })
    }
})
console.log(userSlice.actions);


export { userSlice };
export const {addUser,removeUser,clearUsers} = userSlice.actions;