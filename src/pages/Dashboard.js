//housing, food, entertainment, misc

import '../Style.css';
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Dashboard(){
    const [cost, setCost] = useState(0);

    const handleButtonClick = () => {
        setCost(cost => cost + 1);
    }

    return (
        <div>
            <h1>Add Costs</h1>
            <button onClick={handleButtonClick}>Housing</button>
            <button onClick={handleButtonClick}>Food</button>
            <button onClick={handleButtonClick}>Entertainment</button>
            <button onClick={handleButtonClick}>Misc</button>
            <Link to="/">Log out</Link>
        </div>
    );
    
}


export default Dashboard;