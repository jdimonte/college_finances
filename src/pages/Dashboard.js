import { UserContext} from '../provider/UserProvider'
import '../Style.css';
import React, {useEffect, useContext, useState} from 'react'
import { Redirect,Link } from 'react-router-dom'
import ProgressBar from "../components/progressbar";

const testData = [
    { bgcolor: "#6a1b9a", completed: 60 },
    { bgcolor: "#00695c", completed: 30 },
    { bgcolor: "#ef6c00", completed: 53 },
  ];

function Dashboard(setUserData){

    const user = useContext(UserContext);
    const [redirect, setRedirect] = useState(null);

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

    const[inHousing, setInHousing] = useState(true);
    const[inFood, setInFood] = useState(false);
    const[inEntertainment, setInEntertainment] = useState(false);
    const[inMisc, setInMisc] = useState(false);

    useEffect(() => {
        if(!user) {
            setRedirect("/")
        }
    }, [user]);
    if (redirect) {
        <Redirect to={redirect}/>;
    }
    

    const handleButtonClick = () => {
        var temp;
        if(inHousing){
            temp = Number(housing) + Number(amount);
            setHousing(temp);
        }
        else if(inFood){
            temp = Number(food) + Number(amount);
            setFood(temp);
        }
        else if(inEntertainment){
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

    const handleHousingClick = () => {
        setInHousing(true);
        setInFood(false);
        setInEntertainment(false);
        setInMisc(false);
    }
    const handleFoodClick = () => {
        setInHousing(false);
        setInFood(true);
        setInEntertainment(false);
        setInMisc(false);
    }
    const handleEntertainmentClick = () => {
        setInHousing(false);
        setInFood(false);
        setInEntertainment(true);
        setInMisc(false);
    }
    const handleMiscClick = () => {
        setInHousing(false);
        setInFood(false);
        setInEntertainment(false);
        setInMisc(true);
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

    const displayTitle = ()=>{
        if(inHousing){
            return <h1 className="title">Housing</h1>
        } else if(inFood){
            return <h1 className="title">Food</h1>
        } else if(inEntertainment) {
            return <h1 className="title">Entertainment</h1>
        } else {
            return <h1 className="title">Misc</h1>
        }
      }

    return (
        <div>
            <div className="navigate_container">
                <button className="navigate" onClick={() => handleHousingClick()}>Housing Image</button>
                <button className="navigate" onClick={() => handleFoodClick()}>Food Image</button>
                <button className="navigate" onClick={() => handleEntertainmentClick()}>Entertainment Image</button>
                <button className="navigate" onClick={() => handleMiscClick()}>Misc Image</button>
            </div>
            {displayTitle()}
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
    </div>
    )}

export default Dashboard;
