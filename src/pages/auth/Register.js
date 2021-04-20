import React,{useState} from 'react';
import {auth} from '../../firebase';
import {toast} from 'react-toastify';
require('dotenv').config();


const Register =()=>{
const[email,setEmail] = useState("")

const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log("ENV----->" ,process.env.REACT_APP_REGISTER_REDIRECT_URL);
    const config = {
        url:process.env.REACT_APP_REGISTER_REDIRECT_URL,
        handleCodeInApp : true,
    };
    await auth.sendSignInLinkToEmail(email,config);
toast.success(`Email is sent to ${email}.Click the link to complete your registeration.`)
// save user email in local storage

window.localStorage.setItem('emailForRegistration',email);
// clear state
setEmail("")
}



 const registerForm =() => 
  (  <form 
    onSubmit = {handleSubmit}
    >
     <input type = "email" className = "form-control"
      value = {email}
     onChange ={(e) => setEmail(e.target.value)}
     placeholder = "Your email"
     autoFocus
    />
<br></br>
<button type = "submit" className = "btn btn-raised"  style={{backgroundColor:"#4285f4", fontWeight:"bolder", color: "#fff"}}>Register</button>
</form>)

    return(
        <div className = "container p-5" style={{height:"500px"}}>
        <div className = "row" style={{marginTop : "10%"}}>
<div className = "col-md-6 offset-md-3 log_ii">
    <h4 style={{color:"#003a48", fontWeight:"bolder"}}>Register</h4>
  { registerForm()}
    
</div>
        </div>
  </div>
    )
}

export default Register;