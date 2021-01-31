//housing, food, entertainment, misc

import '../Style.css';
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Dashboard(setUserData){
    const [housing, setHousing] = useState(0);
    const [food, setFood] = useState(0);
    const [entertainment, setEntertainment] = useState(0);
    const [misc, setMisc] = useState(0);
    const [cost, setCost] = useState(0);
    const [amount, setAmount] = useState(0);
    const [budget, setBudget] = useState(0);
    const [state] = useState(0);
    const [goal, setGoal] = ("Good Job!");

    const handleButtonClick = (x) => {
        var temp;
        if(x === 'h'){
            temp = Number(housing) + Number(amount);
            setHousing(temp);
        }
        else if(x === 'f'){
            temp = Number(food) + Number(amount);
            setFood(temp);
        }
        else if(x === 'e'){
            temp = Number(entertainment) + Number(amount);
            setEntertainment(temp);
        }
        else {
            temp = Number(misc) + Number(amount);
            setMisc(temp);
        }
        var temp2 = Number(cost) + Number(amount);
        setCost(temp2);
    }

    function handleBudgetChange(event) {
        setBudget(event.target.value);
    }

    function handleAmountChange(event) {
        setAmount(event.target.value);
    }

    return (
        <div>
            <h1>Add Costs</h1>
            <form>
                <label>Costs</label>
                <input 
                type="number"
                name="amount"
                value={state.amount}
                onChange={handleAmountChange}
                />
                <label>Budget</label>
                <input
                type="number"
                name="budget"
                value={state.budget}
                onChange={handleBudgetChange}
                />
            </form>
            <button onClick={() => handleButtonClick('h')}>Housing</button>
            <button onClick={() => handleButtonClick('f')}>Food</button>
            <button onClick={() => handleButtonClick('e')}>Entertainment</button>
            <button onClick={() => handleButtonClick('m')}>Misc</button>
            <h1>Housing: {housing}, Food: {food}, Entertainment: {entertainment}, Misc: {misc}</h1>
            <h1>Amount Spent: {cost}</h1>
            <h1>Total Budget: {budget}</h1>
            { cost > budget ? <p>You are over your budget. Consider decreasing your budget for next week.</p> : <p>Good job! You are under your budget.</p>}
            <Link to="/">Log out</Link>
        </div>
    );
    
}


export default Dashboard;