import React,{useEffect, useState} from 'react';
import {auth} from '../../firebase';
import {toast} from 'react-toastify';
require('dotenv').config();


const RegisterComplete =({history})=>{
const[email,setEmail] = useState("")
const[password,setPassword] = useState("")



useEffect(()=>{
  setEmail(window.localStorage.getItem('emailForRegistration'));
  // console.log(window.location.href);
},[])

const handleSubmit = async(e)=>{
    e.preventDefault();
// validation
    if(!email || !password){
      toast.error('Email and Passswod is required');
      return;
    }
    if(password.length <6){
      toast.error('Password must be at least 6 characters in length');
     return;
    }

  try{
    const result = await auth.signInWithEmailLink(email,window.location.href)
    console.log(result);
 if(result.user.emailVerified){
  window.localStorage.removeItem('emailForRegistration');
 let user = auth.currentUser
 await user.updatePassword(password);
 const idTokenResult = await user.getIdTokenResult();
    history.push('/')
 }



  }catch(error){
console.log(error);
toast.error(error.message);
  }
  
}



 const completeRegistrationForm =() => 
  (  <form 
    onSubmit = {handleSubmit}
    >
     <input type = "email" className = "form-control"
      value = {email}
     placeholder = "Your email"
     disabled
    />
    <input type = "password" className = "form-control"
    value = {password}
    onChange ={e=>setPassword(e.target.value)}
   placeholder = "Password"
   autoFocus
   />
<br></br>
<button type = "submit" className = "btn btn-raised">Register Complete</button>
</form>)

    return(
        <div className = "container p-5">
        <div className = "row">
<div className = "col-md-6 offset-md-3">
    <h4>Complete Registration</h4>
  { completeRegistrationForm()}
    
</div>
        </div>
  </div>
    )
}

export default RegisterComplete;