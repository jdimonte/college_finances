//housing, food, entertainment, misc

import '../Style.css';
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Dashboard(){
    const [cost, setCost] = useState(0);

    const handleButtonClick = () => {
        setCost(cost => cost + 1);
    }
    
}

export default Dashboard;