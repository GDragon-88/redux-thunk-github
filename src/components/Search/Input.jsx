import { useState,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import searchSlice from "./searchSlice";


export function Input(){
    const [valueInput,setValueInput] = useState("")
    const dispatch = useDispatch()
    const getValueInput =(e)=>{
        setValueInput(e.target.value)
    }
    useEffect(()=>{
        dispatch(searchSlice.actions.getValue(valueInput))
    },[valueInput])
    return (<>
        <input value={valueInput} onChange={getValueInput}/>
        <button>Search</button>
    </>)
}