import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Buttons from "./buttons";
import { useSelector } from "react-redux";
import checkLoggedin from "../auth/checkLoggedin";


    function ListMedicines(){
        var [medicines,setMedicines]=useState([]);
        const [searchResults, setSearchResults] = useState('');
     
        var user=useSelector(store=>{return store.login.user})
     

        function fetchMedicine(){
             axios.get('https://medicalstore.mashupstack.com/api/medicine/search?keyword='+searchResults,{
                headers:{'Authorization':"Bearer "+user.token}}).then(response =>{
                setMedicines(response.data)
       
                
             })
        }
    
        useEffect(()=>{
            fetchMedicine()
        },[searchResults])

    
        
        return(
            <div>
                <Navbar></Navbar>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 offset-md-5" >
                            <h2>Medicines</h2>
                        </div>
                    </div>
                    <div style={{float:"right"}}>
                      <input value={searchResults} onChange={event => setSearchResults(event.target.value)} style={{marginRight:'20px',marginTop:'20px'}} />
                      <button onClick={fetchMedicine} className="btn btn-primary">Search</button>
                    </div>
                    <div className="col-md-3 two">
                        <Link to={'/medicines/add'} className="btn btn-primary" >+Add Medicine</Link>
                    </div>
                    
                    {medicines.map(medicine=>{
                           return <Buttons 
                           key={medicine.id} 
                           medicine={medicine}  
                           fetch={fetchMedicine}/>})}
                    
                </div>
            </div>
        );
    }
    
export default checkLoggedin(ListMedicines);
   
   



