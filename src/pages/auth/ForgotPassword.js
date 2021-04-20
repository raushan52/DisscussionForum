import React ,{useState} from 'react';
import { auth } from "../../firebase";
import { toast } from "react-toastify";
require('dotenv').config();

const ForgotPassword =({history})=>{
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
  
      const config = {
        url: "http://localhost:3000/login",
        handleCodeInApp: true,
      };
  
      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          setEmail("");
          setLoading(false);
          toast.success("Check your email for password reset link");
        })
        .catch((error) => {
          setLoading(false);
          toast.error(error.message);
          console.log("ERROR MSG IN FORGOT PASSWORD", error);
        });
    };


    return(
        <div className="container col-md-6 offset-md-3 p-5 log_ii" style={{marginTop: "2rem"}}>
        {loading ? (
          <h4 className="text-danger">Loading</h4>
        ) : (
          <h4>Forgot Password</h4>
        )}
        <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Type your email"
          autoFocus
        />
        <br />
        <button className="btn btn-raised btn-danger " disabled={!email}>
          Submit
        </button>
      </form>
    </div>
    )
}


export default ForgotPassword;