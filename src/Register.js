import { useState } from "react"
import axios from "axios";

export default function Register(){

const[ worker,setWorker ]=useState({
  fname:"", lname:"", mobNo:"", email:"", password:""
});

const HandeleInput = (event)=>{
  setWorker({...worker,[event.target.name]:event.target.value});
}
const SubmitButton  = (e) => {
  e.preventDefault();
  window.alert("Registered Successfully");  
  axios.post("/workeres", worker)
  .then((response)=>{
    console.log(response)
  })
  .catch(function (error) {
    console.log(error);
  }); 
 
}

  return(
    <><form  style={{border:"1px solid black"}}>
      <h2 >Register As New Worker</h2><br/>
      <label>Enter your First Name</label>
      <input type="Text" name="fname" value={worker.fname} onChange={HandeleInput}></input><br/>
      
      <label>Enter your Lirst Name</label>
      <input type="Text" name="lname" value={worker.lname} onChange={HandeleInput}></input><br/>
      
      <label>Enter your Mobile Number</label>
      <input type="Text" name="mobNo" value={worker.mobno} onChange={HandeleInput}></input><br/>
      
      <label>Enter your email</label>
      <input type="Text" name="email" value={worker.email} onChange={HandeleInput}></input><br/>
      
      <label>Enter your Password</label>
      <input type="Text" name="password" value={worker.password} onChange={HandeleInput} ></input><br/>
      <input type="submit" onClick={SubmitButton}></input>
        
      </form></>
  )
}