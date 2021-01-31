import React from 'react' 
import {Link} from 'react-router-dom'

function SignIn() {

    return (
        <div>
            <h1>Sign In</h1>
            <Link to="/Dashboard">Sign in</Link>
        </div>
    )
}

export default SignIn;