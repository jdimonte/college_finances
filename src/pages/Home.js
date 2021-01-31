import React from 'react' 
import {Link} from 'react-router-dom';
import logo from '../assets/PennyPincher.png';

function Home() {
    return (
        <div>
            <img src={logo} alt="logo" width="200px"/>
            <h1>Home</h1>
            <Link to="/login">Login/Register</Link>
        </div>
    )
}

export default Home;