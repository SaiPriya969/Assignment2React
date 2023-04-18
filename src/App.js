import { useState } from 'react';
import './App.css';
import RegForm from './RegForm';
import {LoginForm} from './loginForm';
import StatusComponent from './StatusComponent';


function App() {
  const [ existingUsersArr, setExistingUsersArr ] = useState([])
  const [pageState,setpage] = useState(-1)
  const [status, setStatus] = useState(false)
  const [showStatus, setShowStatus]=useState(false)
  function register (data){
    const ar=[...existingUsersArr, data]
    setExistingUsersArr(ar)
    console.log(existingUsersArr);
    console.log(status,'status')
  }
  return (
    <div className="App">
     <div><button onClick={() => {setpage(1)}}> Login</button></div>
     <div>new user?</div>
     <div><button onClick={() => {setpage(0)}}>Register</button></div>
     {/* <button onClick={() => {setpage(0)}}> RegForm</button>
     <button onClick={() => {setpage(1)}}> existingUsersArr</button> */}

     {  pageState==0 ?  <RegForm register={register} /> : <div> </div> }
     {  pageState==1 ?  <LoginForm existingUsersArr={existingUsersArr} setStatus={setStatus}  setShowStatus={ setShowStatus} status={status} setpage={setpage} /> : <div> </div> }

     { showStatus ? <StatusComponent  status={status}/>  : <div></div>} 
    
     
    </div>
  );
}

export default App;
