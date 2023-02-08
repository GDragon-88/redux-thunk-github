import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUser } from "./userSlide";
import { usersRemainingSelector} from "../../redux/selector"
export function User() {
    const dispatch = useDispatch()
    const dataUser = useSelector(usersRemainingSelector)
    useEffect(() => {
        dispatch(fetchUser())
    }, [])
    return (
        <div className="user">
            {dataUser.map((i, index) => (
                <div className="item" key={index}>
                    <div className="img-user">
                        <img src={i.avatar_url} alt="" />
                    </div>
                    <div className="name-user">
                        <h4>{i.login}</h4>
                    </div>
                    <button className="btn-more"> <a href={`/users/${i.login}`}>more</a></button>
                </div>
            ))}
        </div>
    )
}