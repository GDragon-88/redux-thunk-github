import { configureStore } from "@reduxjs/toolkit";
import getAllUser from "../components/User/userSlide";
import searchSlice from "../components/Search/searchSlice";
import getValueUserInfo from "../components/Datail/detaisSlice";
import projectInfo from "../components/Datail/projectSlice"
const store = configureStore({
    reducer:{
        user:getAllUser.reducer,
        search:searchSlice.reducer,
        userValue:getValueUserInfo.reducer,
        project:projectInfo.reducer
    }
})
export default store