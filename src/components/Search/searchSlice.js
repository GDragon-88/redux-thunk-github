import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name:"search",
    initialState:{value:''},
    reducers:{
        getValue:(state,action)=>{
            state.value=action.payload
           
        }
    }
})