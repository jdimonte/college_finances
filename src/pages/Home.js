import React from 'react' 
import {Link} from 'react-router-dom';
import logo from '../assets/PennyPincher.png';
import Bg from '../assets/PP-bg.png';

function Home() {
    return (
        <div className="home-page" style={{ backgroundImage: `url(${Bg})`}}>
            <div className="logobox">
                <img className="logo" src={logo} alt="logo" width="350px" />
            </div>
            <button className="login-btn"><Link className="link-text" to="/login">Login</Link></button>
        </div>
    )
}

export default Home;