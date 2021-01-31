
import '../Style.css';
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import ProgressBar from "../components/progressbar";

const testData = [
    { bgcolor: "#6a1b9a", completed: 60 },
    { bgcolor: "#00695c", completed: 30 },
    { bgcolor: "#ef6c00", completed: 53 },
  ];

function Dashboard(setUserData){
    const [housing, setHousing] = useState(0);
    const [food, setFood] = useState(0);
    const [entertainment, setEntertainment] = useState(0);
    const [misc, setMisc] = useState(0);
    const [cost, setCost] = useState(0);
    const [amount, setAmount] = useState(0);
    const [budget, setBudget] = useState(0);
    const [state] = useState(0);

    const [hbudget, setHBudget] = useState(0);
    const [fbudget, setFBudget] = useState(0);
    const [ebudget, setEBudget] = useState(0);
    const [mbudget, setMBudget] = useState(0);

    const [hpercent, setHPercent] = useState(0);
    const [fpercent, setFPercent] = useState(0);
    const [epercent, setEPercent] = useState(0);
    const [mpercent, setMPercent] = useState(0);

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

    useEffect(() => {
        setHPercent((housing/cost)*100);
        setFPercent((food/cost)*100);
        setEPercent((entertainment/cost)*100);
        setMPercent((misc/cost)*100);
    }, [cost]);


    return (
        <div>
            <div className="navigate_container">
                <button className="navigate">Housing Image</button>
                <button className="navigate">Food Image</button>
                <button className="navigate">Entertainment Image</button>
                <button className="navigate">Misc Image</button>
            </div>
            <h1 className="title">Title</h1>
            <form className="budget_form">
                <label>Budget: </label>
                    <input
                    type="number"
                    name="budget"
                    value={state.budget}
                    onChange={handleBudgetChange}
                />
            </form>
            <h1 className="budget">Budget: ${budget}</h1>
            <h2 className="new_purchase">New Purchase</h2>
            <form className="amount_form">
                <label>Amount: </label>
                <input 
                type="number"
                name="amount"
                value={state.amount}
                onChange={handleAmountChange}
                />
            </form>
            <button className="add" onClick={() => handleButtonClick('h')}>Add</button>
            <button className="add" onClick={() => handleButtonClick('f')}>Add</button>
            <button className="add" onClick={() => handleButtonClick('e')}>Add</button>
            <button className="add" onClick={() => handleButtonClick('m')}>Add</button>

            <h1>Housing: {housing}, Food: {food}, Entertainment: {entertainment}, Misc: {misc}</h1>
            <h1>Amount Spent: {cost}</h1>

            <h2 className="money_left">Left to spend this week:</h2>

            <div className="App">
            <ProgressBar bgcolor={"#6a1b9a"} completed={hpercent} />
            </div>
            <div className="App">
            <ProgressBar bgcolor={"#6a1b9a"} completed={fpercent} />
            </div>
            <div className="App">
            <ProgressBar bgcolor={"#6a1b9a"} completed={epercent} />
            </div>
            <div className="App">
            <ProgressBar bgcolor={"#6a1b9a"} completed={mpercent} />
            </div>

            { cost > budget ? <p className="feedback">You are over your budget</p> : <p className="feedback">Good job! </p>}
            <Link to="/">Log out</Link>
        </div>
    );
    
}


export default Dashboard;