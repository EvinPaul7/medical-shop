import { createBrowserRouter } from 'react-router-dom'
import App from './App.js'
import ListMedicines from './medicines/listMedicines.js';
import Signup from './auth/signup.js';
import AddMedicine from './medicines/addMedicine.js';
import Login from './auth/login.js';
import EditMedicine from './medicines/editMedicine.js';


const router=createBrowserRouter([
    {path:'',element:<App/>},
    {path:'/signup',element:<Signup/>},
    {path:"/login",element:<Login/>},
    {path:'/medicines', element:<ListMedicines/>},
    {path:"/medicines/add", element:<AddMedicine/>},
    {path:'/medicines/:medicineId/edit',element:<EditMedicine/>}
  
   
    
]);

export default router;