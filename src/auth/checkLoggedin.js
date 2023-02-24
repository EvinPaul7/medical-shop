import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


export const checkLoggedin=(Component)=>{

    function Wrapper(props){
        var navigate=useNavigate()
        var user=useSelector(store=>{
            return store.login.user})

        useEffect(()=>{
            if(!user){
                navigate('/login')
            }
        },[user])
        return  <Component {...props} />
    }
    return Wrapper
}

export default checkLoggedin;