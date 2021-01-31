import React, {useEffect, useState, useContext} from 'react' 
import { Redirect } from 'react-router-dom'
import { UserContext} from '../provider/UserProvider'
import { signInWithGoogle } from '../database/firebase'

function SignInPage() {
    const user = useContext(UserContext)
    const [redirect, setredirect] = useState(null)

    useEffect(() => {
        if (user) {
        setredirect('/dashboard')
        }
    }, [user])
    if (redirect) {
        return <Redirect to={redirect}/>
    }
    return (
        <div className="login-buttons">
            <button className="login-provider-button" onClick={signInWithGoogle}>
            <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
            <span> Continue with Google</span>
        </button>
        </div>
    );
}

export default SignInPage;