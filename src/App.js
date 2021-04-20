import React,{useEffect} from 'react';
import {Route,Switch} from 'react-router-dom'
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import BlogDetails from "./pages/Blog/BlogDetails"
import Login from './pages/auth/Login';
import Register from './pages/auth/Register'
import Header from './components/nav/Header';
import RegisterComplete from './pages/auth/RegisterComplete';
import { auth } from "./firebase";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Navbar from './Navbar';
import NotFound from './NotFound'
import Create from './pages/Blog/Create'
import { useDispatch } from "react-redux";


const App=()=> {

  const dispatch = useDispatch();
  // to check firebase auth state
  useEffect(()=>{
      const unsubscribe = auth.onAuthStateChanged(async(user)=>{
        if(user){
          const idTokenResult = await user.getIdTokenResult();
          console.log("user",user);
          dispatch({
            type:"LOGGED_IN_USER",
            payload:{
              email:user.email,
              token:idTokenResult.token,
            },
          });
        }
      });
       // cleanup
  return()=>unsubscribe()
  },[])
 

  return (
   <>
   <div className ="App">
   <Header />
   
   <ToastContainer />
   
   <Switch>
   
   <Route exact path ="/" component ={Home} />
   <Route  exact path = "/login" component = {Login} />
   <Route  exact path = "/register" component = {Register} />
   <Route  exact path = "/register/complete" component = {RegisterComplete} />
   <Route exact path="/forgot/password" component={ForgotPassword} />
   <Route path="/blogs/:id">
   <BlogDetails />
 </Route>
 <Route path="/create">
              <Create />
            </Route>
            <Route path="*">
            <NotFound />
        </Route> 
   </Switch>
   </div>
   </>
  );
}

export default App;
