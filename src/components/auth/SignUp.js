import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from "./../../store/actions/authActions";

function SignUp(props) {
    const authError = useSelector((state) => state.auth.authError);
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const auth = useSelector(state => state.firebase.auth);
    if (auth.uid) return <Redirect to='/' />

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleChangeFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            email, password, firstName, lastName
        }
        dispatch(signUp(newUser));
    }
    return (
        <div className="container">
            <form className="white" onSubmit={handleSubmit}>
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' value={email} onChange={handleChangeEmail} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' value={password} onChange={handleChangePassword} />
                </div>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id='firstName' value={firstName} onChange={handleChangeFirstName} />
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id='lastName' value={lastName} onChange={handleChangeLastName} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                    <div className="red-text center">
                        {authError ? <p>{authError}</p> : null}
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
