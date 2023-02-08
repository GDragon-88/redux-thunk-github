import { createSelector } from '@reduxjs/toolkit';
export const dataUser = (state)=>state.user.data;
export const search = (state)=>state.search.value;
export const userInfo = (state)=>state.userValue.value;
export const project = (state)=>state.project.value;

export const usersRemainingSelector = createSelector(dataUser,search,userInfo,project,
    (user,valueInput,userInfo,project)=>{
        if(valueInput===""){
            return user
        }
        if(valueInput!==""){
          return  user.filter(i=>i.login.includes(valueInput))
        }
        if(project){
            return project
        }
    }
    
)