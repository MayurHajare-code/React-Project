import { useState } from "react";
import '../style/login.css';
import axios from 'axios';
import url from '../api/api';

function Register() {

    const [user, addUser] = useState({});

    const postUser = (data) => {
        axios.post(`${url}/User`, data).then(
            (response) => {
                console.log(response);
                alert("user register successfully....");
               
            },
            (error) => {
                console.log(error);
            }
        )
    }

    const registerForm = (e) => {
        console.log(user)
        postUser(user)
        e.preventDefault();
    }


    return (
        <div>

            <form onSubmit={registerForm} className="login-form">
                <h2>Sign Up </h2>

                <p>It's free and takes few minute</p>
                <input type="text" name="firstName" placeholder="First Name" className="login-input" required onChange={(e) => { addUser({ ...user, firstName: e.target.value }) }} />
                <br />

                <input type="text" name="lastName" placeholder="Last Name" className="login-input" required onChange={(e) => { addUser({ ...user, lastName: e.target.value }) }} />
                <br />

                <input type="email" name="email" placeholder="Email" className="login-input" required onChange={(e) => { addUser({ ...user, email: e.target.value }) }} />
                <br />

                <input type="password" name="password" placeholder="Password" className="login-input" required onChange={(e) => { addUser({ ...user, password: e.target.value }) }} />
                <br />

                <input type="password" name="ConfirmPassword" placeholder="Confirm Password" className="login-input" required onChange={(e) => { addUser({ ...user, ConfirmPassword: e.target.value }) }} />
                <br />

                <input className="btn" type="submit" />
            </form>
        </div>
    );


}

export default Register;