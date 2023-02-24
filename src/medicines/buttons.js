import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Buttons(props){
    var user=useSelector(store=>{return store.login.user})

    function deleteMed(){
        axios.delete('https://medicalstore.mashupstack.com/api/medicine/'+props.medicine.id,{headers:{'Authorization':"Bearer "+user.token}}).then(response=>{
            props.fetch()
        })

    }

    

    return(
        <div className="card col-md-6 offset-md-3">
            <div className="card-body">
                <p>Medicine:<b> {props.medicine.name}</b></p>
                <p>Company:<b> {props.medicine.company}</b></p>   
                <p>Expiry Date:<b> {props.medicine.expiry_date}</b></p> 
            <Link to={'/medicines/'+props.medicine.id+"/edit"} className="btn btn-secondary">Edit Medicine Details </Link>
            <button onClick={deleteMed} className="btn btn-secondary">Delete Medicine</button>
        </div>

        </div>
    );
}

export default Buttons;