import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar";
import checkLoggedin from "../auth/checkLoggedin";


function EditMedicine(){
    var {medicineId}=useParams()
    var [name,setName]=useState('')
    var [company,setCompany]=useState('')
    var [expiry,setExpiry]=useState('')
    var user=useSelector(store=>{
        return store.login.user
    })
    var navigate=useNavigate()

    useEffect(()=>{
        axios.get('https://medicalstore.mashupstack.com/api/medicine/'+medicineId,{headers:{'Authorization':'Bearer '+user.token}}).then(response=>{
            setName(response.data.name);
            setCompany(response.data.company);
            setExpiry(response.expiry_date);
            
        })
    },[medicineId])

     function change(){
        axios.post('https://medicalstore.mashupstack.com/api/medicine/'+medicineId,{
            name:name,
            company:company,
            expiry_date:expiry
     },{headers:{'Authorization':'Bearer '+user.token}}).then(response=>{
        console.log(response.data)
        navigate('/medicines')
        })
        
     }

    return(
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <label>New Medicine Name:</label>
                        <input type='text' value={name} onChange={(event=>setName(event.target.value))} className="form-control"></input>
                        <label>New Company Name:</label>
                        <input type="company" value={company} onChange={(event)=>setCompany(event.target.value)} className="form-control"></input>
                        <label>New Expiry Date:</label>
                        <input type='date' value={expiry} onChange={(event)=>setExpiry(event.target.value)} className="form-control"></input>
                        <button onClick={change} className='btn btn-primary'>Change</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default checkLoggedin(EditMedicine);