
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

function Signup(){
    var [name,setName]=useState('');
    var [email,setEmail]=useState('');
    var [password,setPassword]=useState('');
    var [conf_pass,setConf_pass]=useState('');
    var [errorMsg,setErrorMsg]=useState('');
    var navigate=useNavigate()

    function signupUser(){
        var user={name:name,
                  email:email,
                  password:password,
                  password_confirmation:conf_pass
                }
        axios.post('https://medicalstore.mashupstack.com/api/register',user).then(response=>{
            setErrorMsg('')
            navigate('/login')
        }).catch(error=>{
                setErrorMsg('Failed to Signup. Please contact admin')
            })
    }
    return(
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">

                    
            <h1 className="col-md-4 offset-md-5">Sign Up</h1>
            {errorMsg?errorMsg:""}    
           
            
            <div  className="col-md-4 offset-md-4">
            <div className="form-group ">
            <label>Name:</label>
            <input className="form-control" type="text" value={name} onChange={(event)=>{setName(event.target.value)}}></input>
            </div>
            <div className="form-group">
            <label>Email Id:</label>
            <input className="form-control" type="email" value={email} onChange={(event)=>{setEmail(event.target.value)}}></input>
            </div>
            <div className="form-group">
            <label>Password:</label>
            <input className="form-control" type="password" value={password} onChange={(event)=>{setPassword(event.target.value)}}></input>
            </div>
            <div className="form-group">
            <label>Confirm Password:</label>
            <input className="form-control" type="password" value={conf_pass} onChange={(event)=>{setConf_pass(event.target.value)}}></input>
            </div>
            </div>
            <div className="col-md-4 offset-md-5">
            <button className="btn btn-primary" onClick={signupUser}>Sign Up</button>
            </div>
          
            
            </div>
        </div>
    </div>
           
        </div>

    );
}
export default Signup;