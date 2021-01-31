import React, {useContext} from 'react' 
import {firebaseAuth} from '../provider/AuthProvider'
import {Link, Redirect, Route, Switch } from 'react-router-dom'
import Login from '../components/Login'
import SignUp from '../components/Signup'

function SignInPage() {

    const {handleSignup} = useContext(firebaseAuth)
    console.log(handleSignup) 
    const user = true;
    return (
        <SignUp/>
    )
}

export default SignInPage;