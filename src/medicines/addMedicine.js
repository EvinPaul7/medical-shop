import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import "../App.css"
import { useSelector } from "react-redux";
import checkLoggedin from "../auth/checkLoggedin";


function AddMedicine(){
  var [name,setName]=useState('');
  var [company,setCompany]=useState('');
  var [expiry,setExpiry]=useState('');
  var navigate=useNavigate();
  var user=useSelector(store=>{return store.login.user})

  function add(){
    axios.post('https://medicalstore.mashupstack.com/api/medicine',{
        name:name,
        company:company,
        expiry_date:expiry
    },{headers:{'Authorization':"Bearer "+user.token}}).then(response=>{
        navigate('/medicines')
    })
  }
  
   

    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <div className="col=md-4 offset-md-4">
                        <h2>Add Medicine</h2>   
                    </div>
                    <div className="col-md-6 offset-md-3 four">
                            <div className="form-group">
                            <label>Name:</label>
                            <input className="form-control" type="text" value={name} onChange={(event)=>{setName(event.target.value)}}></input>
                            </div>
                            <div className="form-group">
                            <label className="">Company Name:</label>
                            <input className="form-control" type="text" value={company} onChange={(event)=>{setCompany(event.currentTarget.value)}}></input>
                            </div>
                            <div className="form-group">
                            <label>Medicine Expiry Date:</label>
                            <input className="form-control" type="date" value={expiry} onChange={(event)=>{setExpiry(event.target.value)}}></input>
                            </div>
                            <div className="form-group">
                            <button onClick={add} className="btn btn-primary" >Add</button>
                            </div>         
                    </div>
                </div>
            </div>
        </div>
    );

}

export default checkLoggedin(AddMedicine);