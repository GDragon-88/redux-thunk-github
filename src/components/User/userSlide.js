import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
export const fetchUser = createAsyncThunk("getUser",async()=>{
    const res = await fetch("https://api.github.com/users")
    const result = await res.json();
    return result
})

const getAllUser = createSlice({
    name:"user",
    initialState:{status:"wating",data:[]},
    reducers:{
        getDataUser :(state,action)=>{
            state.data = action.payload
        }
    },
    extraReducers:{
        [fetchUser.pending]:(state,action)=>{
            state.status='waiting'
        },
        [fetchUser.fulfilled]:(state,action)=>{
            state.status='success';
            state.data = action.payload
        }
    }
})

export const action =fetchUser.actions
export default getAllUser