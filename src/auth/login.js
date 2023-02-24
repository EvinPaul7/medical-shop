
import { useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remainLoggedin } from "../store/loginSlice";


function Login(){
    var [email,setEmail]=useState('');
    var [password,setPassword]=useState('');
    var [errorMsg,setErrorMsg]=useState('')
    var navigate=useNavigate();
    var dispatch= useDispatch();

    var user=useSelector(store=>{return store.user});

   function attemtLogin(){
    axios.post('https://medicalstore.mashupstack.com/api/login',{
        email:email,
        password:password
    }).then(response =>{
        setErrorMsg('')
        console.log("Token:"+response.data.token)
          user={
            email:email,
            token:response.data.token
        }
        dispatch(remainLoggedin(user))
        navigate('/medicines')
    }).catch(error=>{ 
        setErrorMsg('Not Found,Try Signing up or contact admin')
    })
}
   

    return(
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2 style={{textAlign:"center"}}>Login</h2>
                        {errorMsg?errorMsg:""}        
                        
            <div className="form-group">
            <label>Email Id:</label>
            <input className="form-control" type="email" value={email} onChange={(event)=>{setEmail(event.target.value)}}></input>
            </div>
            <div className="form-group">
            <label>Password:</label>
            <input className="form-control" type="password" value={password} onChange={(event)=>{setPassword(event.target.value)}}></input>
            </div>
            <div className="col-md-4">
            <button className="btn btn-primary" onClick={attemtLogin}>Login</button>
            </div>
            </div>
                </div>
            </div>
        </div>
    );
}

export default Login;