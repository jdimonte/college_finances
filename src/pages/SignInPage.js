import React, {useEffect, useState, useContext} from 'react' 
import { Redirect } from 'react-router-dom'
import { UserContext} from '../provider/UserProvider'
import { signInWithGoogle } from '../database/firebase'
import logo from '../assets/PennyPincher.png';
import Bg from '../assets/PP-bg.png';

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
        <div className="home-page" style={{ backgroundImage: `url(${Bg})`}}>
            <div className="logobox">
                <img className="logo" src={logo} alt="logo" width="350px" />
            </div>
            <div className="login-buttons">
                <button className="login-provider-button" onClick={signInWithGoogle}>
                <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
                <span> Continue with Google</span>
            </button>
            </div>
        </div>
    );
}

export default SignInPage;