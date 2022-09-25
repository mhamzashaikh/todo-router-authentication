import { Link } from "react-router-dom";
import "./Form.css";
function Login(){

    return(
        <div className="form-container">

        <label htmlFor="loginEmail">Email</label>
        <input type="text" id="loginEmail"/>
        <label htmlFor="loginPassword">Password</label>
        <input type="text" id="loginPassword"/>
        <span>Don't have an account? <Link to="/signup">Create account now</Link></span>

        <button id="loginBtn">Login</button>
  
        </div>
  
        
    )
}

export default Login;