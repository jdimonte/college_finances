import { UserContext} from '../provider/UserProvider'
import { logOut } from '../database/firebase'
import '../Style.css';
import React, {useEffect, useContext, useState} from 'react'
import { Redirect,Link } from 'react-router-dom'
import ProgressBar from "../components/progressbar";

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

    const [percent, setPercent] = useState(0)

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
        setPercent((housing/hbudget)*100);
    }
    const handleFoodClick = () => {
        setInHousing(false);
        setInFood(true);
        setInEntertainment(false);
        setInMisc(false);
        setPercent((food/fbudget)*100);
    }
    const handleEntertainmentClick = () => {
        setInHousing(false);
        setInFood(false);
        setInEntertainment(true);
        setInMisc(false);
        setPercent((entertainment/ebudget)*100);
    }
    const handleMiscClick = () => {
        setInHousing(false);
        setInFood(false);
        setInEntertainment(false);
        setInMisc(true);
        setPercent((misc/mbudget)*100);
    }

    function handleBudgetChange(event) {
        if(inHousing){
            setHBudget(event.target.value);
        } else if(inFood){
            setFBudget(event.target.value);
        } else if(inEntertainment) {
            setEBudget(event.target.value);
        } else {
            setMBudget(event.target.value);
        }
    }

    function handleAmountChange(event) {
        setAmount(event.target.value);
    }

    useEffect(() => {
        if(inHousing){
            setPercent((housing/hbudget)*100);
            setBudget(hbudget);
        } else if(inFood){
            setPercent((food/fbudget)*100);
            setBudget(fbudget);
        } else if(inEntertainment) {
            setPercent((entertainment/ebudget)*100);
            setBudget(ebudget);
        } else {
            setPercent((misc/mbudget)*100);
            setBudget(mbudget);
        }
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
    
    const displayBudget = ()=>{
        if(inHousing){
            return <h1 className="budget">Budget: ${hbudget}</h1>
        } else if(inFood){
            return <h1 className="budget">Budget: ${fbudget}</h1>
        } else if(inEntertainment) {
            return <h1 className="budget">Budget: ${ebudget}</h1>
        } else {
            return <h1 className="budget">Budget: ${mbudget}</h1>
        }
    }

    return (
        <div className="dashboard-page">
            <div className="navigate_container">
                <button className="navigate nav-home" onClick={() => handleHousingClick()}><i class="fas fa-home"></i></button>
                <button className="navigate nav-food" onClick={() => handleFoodClick()}><i class="fas fa-utensils"></i></button>
                <button className="navigate nav-mov" onClick={() => handleEntertainmentClick()}><i class="fas fa-film"></i></button>
                <button className="navigate nav-misc" onClick={() => handleMiscClick()}><i class="fas fa-tags"></i></button>
            </div>
            <div className="dashboard-top">
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
                {displayBudget()}
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

                <h2 className="money_left">Left to spend this week:</h2>
            </div>
            <div className="App">
            <ProgressBar bgcolor={"#6a1b9a"} completed={percent} />
            </div>

            { cost > budget ? <p className="feedback">You are over your budget</p> : <p className="feedback">Good job! </p>}
            <Link to="/">Home</Link>
            <button onClick={logOut}>Log out</button>
            <button>reset</button>
        </div>
    )}

export default Dashboard;
