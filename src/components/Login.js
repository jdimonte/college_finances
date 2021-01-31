import React, {useState} from "react";
import { Link } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler = (event,email, password) => {
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
                {error != null && <div>{error}</div>}
                <form className="">
                    <label htmlFor="userEmail" className="entry-block">Email:</label>
                    <input type="email" className="inputField" name="userEmail" value={email} placeholder="example@email.com" id="userEmail"
                    onChange={(event) => onChangeHandler(event)} />
                    <label htmlFor="userPassword" className="entry-block">Password :</label>
                    <input type="password" className="inputField" name="userEmail" value={password} placeholder="Password" id="userPassword"
                    onChange = {(event) => onChangeHandler(event)}/>   
                    <button className="form-btn">Sign in</button>
                </form>
                <p className="text-currentTarget">
                    Don't have an account?{" "}
                    <Link to="/signUp" className="text-blue-600">
                        Sign up here
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login;