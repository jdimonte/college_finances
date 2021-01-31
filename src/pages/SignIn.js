import React from 'react' 
import {Link, Redirect, Router } from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'

function SignIn() {
    const user = true;
    return (
        user ? <Redirect to="/Dashboard"/> :
            <Router>
                <Register path="/login/register"/>
                <Login path="/login"/>
            </Router>
    )
}

export default SignIn;