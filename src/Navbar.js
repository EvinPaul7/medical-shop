import axios from "axios";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import './App.css'
import { removeLoggedin } from "./store/loginSlice";
import { useSelector } from "react-redux";

function Navbar(){
    var dispatch=useDispatch();
    var navigate=useNavigate();
    var user=useSelector(store=>store.login.user)

    function logout(){
        if(user){
            axios.post('https://medicalstore.mashupstack.com/api/logout',{},{headers:{'Authorization':"Bearer "+ user.token}})
            dispatch(removeLoggedin())
            navigate('/login')

        }
    }
    return(
        <nav className="navbar navbar-expand bg-light">
        <div style={{float:"left"}}>
            <h1>Medical Store</h1>
        </div>
            <div className="collapse navbar-collapse mr-auto" >
                <ul  className="navbar-nav ml-auto" >
                    <li><NavLink to={'/'}></NavLink></li>
                    <li><NavLink to={"/medicines"}>Medicines</NavLink></li>  
                    <li><NavLink to={"/signup"}>Sign Up</NavLink></li>      
               {user?<li><button onClick={logout} style={{border:"none", backgroundColor:"aliceblue", color:"#3366CC"}}>Logout</button></li>:<li><NavLink to={"/login"}>Login</NavLink></li>}
                
    
    
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

        
  