import { Link } from "react-router-dom";
import {useState } from "react";
import '../style/login.css'
import axios from "axios";
import url from "../api/api";

function Login() {

    const [user, addLoginUser] = useState({});

    const postLoginUser = (data) => {
        axios.post(`${url}/User`, data).then(
            (response) => {
                if(response.data.email){
                    console.log(response);
                    alert("user login successfully....");
                }else{
                    alert("user not login successfully....");
                }
            },
            (error) => {
                console.log(error);
            }
        )
    }

    const loginForm = (e) => {
        console.log(user)
        postLoginUser(user)
        e.preventDefault();
    }
   
        return (
            <div>
                <form className="login-form" onSubmit= {loginForm}>
                    <h2>Login </h2>
                    <input type="email" placeholder="Email" name="email" className="login-input" required onChange={(e) => { addLoginUser({ ...user, email: e.target.value }) }}/>
                    <br />

                    <input type="password" placeholder="Password" name="password" className="login-input" required onChange={(e) => { addLoginUser({ ...user, password: e.target.value }) }} />
                    <br />

                    <input className="btn" type="submit" value="Login" />

                    <p className="login-text">Not have an account?
                        <Link className="login-link" to="/register">SignUp Here</Link>
                    </p>

                </form>

            </div>
        );
    
}

export default Login;