import { ProjectInfo } from "./ProjectInfo"
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {getOneUser} from "./detaisSlice";
import {getAllProject} from "./projectSlice"
import { Loading } from "../Loading";
 
export function Main(){
    let nameUser = window.location.href.slice(28);
    const [flag,setFlag]=useState(false)
    const dispatch = useDispatch()
    const value = useSelector(state=>state.userValue.value)
    const dataProject = useSelector(state=>state.project.data)
    
    useEffect(()=>{
        
        dispatch(getOneUser(nameUser))
        dispatch(getAllProject(nameUser))
    },[])

    console.log(dataProject,'hai');
    return (<>
        <div className="container">
            <div className="main">
                <img src={value.avatar_url} alt=""/>
                <button><a>Visit GitHub Profile</a></button>
                <h4>User name: {value.name}</h4>
            </div>
            <div className="info">
                <span style={{backgroundColor:"red"}}>Follower:{value.followers}</span>
                <span style={{backgroundColor:"green"}}>Following:{value.following}</span>
                <span style={{color:"black"}}>Public Repos:{value.public_gists}</span>
                <span style={{backgroundColor:"black"}}>Public Gits:{value.public_repos}</span>
            </div>

            <div className="show-project">
                    {dataProject.length ===0 ?<Loading/> :dataProject.map((i,index)=>(<ProjectInfo key={index} nameProject={i.name}/>))}
            </div>
        </div>
    </>)
}