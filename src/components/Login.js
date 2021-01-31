import React, {useState} from "react";
import { Link } from 'react-router-dom'

function login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler = 
            (event,email, password) => {
                event.preventDefault();
    };

    const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;

        if(name === 'userEmail') {
            setEmail(value);
        }
        else if(name === 'userPassword'){
          setPassword(value);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <div>
                {error != nyll && <div>{error}</div>}
                <form className="">
                    <label htmlFor="userEmail" className="entry-block">Email:</label>
                </form>    
            </div>
        </div>
    )
}

export default login;