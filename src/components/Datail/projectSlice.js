import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const getAllProject = createAsyncThunk('getAllProject',async(nameUser)=>{
    const data=  await fetch(`https://api.github.com/users/${nameUser}/repos?per_page=5&sort=created:asc`)
    const results = await data.json()
    return results
 });
 
 const projectInfo = createSlice({
     name:'project',
     initialState:{status:'waiting',data:[]},
     reducers:{
         userInfo:(state,action)=>{
             state.value = action.payload
         }
     },
     extraReducers:{
         [getAllProject.pending]:(state,action)=>{
             state.state="waiting"
         },
         [getAllProject.fulfilled]:(state,action)=>{
             state.status="success",
             state.data = action.payload
         }
     }
 });
 
 export default projectInfo;