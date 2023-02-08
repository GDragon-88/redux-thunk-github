import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const getOneUser = createAsyncThunk('getOneUser',async(nameUser)=>{
   const data=  await fetch(`https://api.github.com/users/${nameUser}`)
   const results = await data.json()
   return results
});

const getValueUserInfo = createSlice({
    name:'userInfo',
    initialState:{status:'waiting',value:[]},
    reducers:{
        userInfo:(state,action)=>{
            state.value = action.payload
        }
    },
    extraReducers:{
        [getOneUser.pending]:(state,action)=>{
            state.status="waiting"
        },
        [getOneUser.fulfilled]:(state,action)=>{
            state.status="success",
            state.value = action.payload
        }
    }
});

export default getValueUserInfo;