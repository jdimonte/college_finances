//housing, food, entertainment, misc

import '../Style.css';
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Dashboard(){
    const [housing, setHousing] = useState(0);
    const [food, setFood] = useState(0);
    const [entertainment, setEntertainment] = useState(0);
    const [misc, setMisc] = useState(0);
    const [cost, setCost] = useState(0);


    const handleButtonClick = (x) => {
        if(x === 'h'){
            setHousing(housing => housing + 1);
        }
        else if(x === 'f'){
            setFood(food => food + 1);
        }
        else if(x === 'e'){
            setEntertainment(entertainment => entertainment + 1);
        }
        else {
            setMisc(misc => misc + 1);
        }

        setCost(cost => cost + 1);
    }

    return (
        <div>
            <h1>Add Costs</h1>
            <button onClick={() => handleButtonClick('h')}>Housing</button>
            <button onClick={() => handleButtonClick('f')}>Food</button>
            <button onClick={() => handleButtonClick('e')}>Entertainment</button>
            <button onClick={() => handleButtonClick('m')}>Misc</button>
            <h1>Housing: {housing}, Food: {food}, Entertainment: {entertainment}, Misc: {misc}</h1>
            <h1>Amount Spent: {cost}</h1>
            <h1>Total Budget: $1000</h1>
            <Link to="/">Log out</Link>
        </div>
    );
    
}


export default Dashboard;