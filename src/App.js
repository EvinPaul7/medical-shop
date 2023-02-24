import Navbar from './Navbar';
import checkLoggedin from './auth/checkLoggedin';


function App() {

  return (
    <div>
      <Navbar></Navbar>
    </div>
  );
}

export default checkLoggedin(App);
