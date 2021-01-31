import { UserContext} from '../provider/UserProvider'
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
            if(housing > hbudget){
                setHousing(hbudget);
            }
            if((housing/hbudget)*100 > 100){
                setPercent(100);
            }
            else{
                setPercent((housing/hbudget)*100);
            }
        }
        else if(inFood){
            temp = Number(food) + Number(amount);
            setFood(temp);
            if(food > fbudget){
                setFood(fbudget);
            }
            if((food/fbudget)*100 > 100){
                setPercent(100);
            }
            else{
                setPercent((food/fbudget)*100);
            }
        }
        else if(inEntertainment){
            temp = Number(entertainment) + Number(amount);
            setEntertainment(temp);
            if(entertainment > ebudget){
                setEntertainment(ebudget);
            }
            if((entertainment/ebudget)*100 > 100){
                setPercent(100);
            }
            else{
                setPercent((entertainment/ebudget)*100);
            }
        }
        else {
            temp = Number(misc) + Number(amount);
            setMisc(temp);
            if(misc > mbudget){
                setMisc(mbudget);
            }
            if((misc/mbudget)*100 > 100){
                setPercent(100);
            }
            else{
                setPercent((misc/mbudget)*100);
            }
        }
        var temp2 = Number(cost) + Number(amount);
        setCost(temp2);
    }

    const handleHousingClick = () => {
        setInHousing(true);
        setInFood(false);
        setInEntertainment(false);
        setInMisc(false);
        if((housing/hbudget)*100 > 100){
            setPercent(100);
        }
        else{
            setPercent((housing/hbudget)*100);
        }
    }
    const handleFoodClick = () => {
        setInHousing(false);
        setInFood(true);
        setInEntertainment(false);
        setInMisc(false);
        if((food/fbudget)*100 > 100){
            setPercent(100);
        }
        else{
            setPercent((food/fbudget)*100);
        }
    }
    const handleEntertainmentClick = () => {
        setInHousing(false);
        setInFood(false);
        setInEntertainment(true);
        setInMisc(false);
        if((entertainment/ebudget)*100 > 100){
            setPercent(100);
        }
        else{
            setPercent((entertainment/ebudget)*100);
        }
    }
    const handleMiscClick = () => {
        setInHousing(false);
        setInFood(false);
        setInEntertainment(false);
        setInMisc(true);
        if((misc/mbudget)*100 > 100){
            setPercent(100);
        }
        else{
            setPercent((misc/mbudget)*100);
        }
    }

    function handleBudgetChange(event) {
        if(inHousing){
            setHBudget(event.target.value);
            if(housing > hbudget){
                setHousing(hbudget);
            }
            if((housing/hbudget)*100 > 100){
                setPercent(100);
            }
            else{
                setPercent((housing/hbudget)*100);
            }
        } else if(inFood){
            setFBudget(event.target.value);
            if(food > fbudget){
                setFood(fbudget);
            }
            if((food/fbudget)*100 > 100){
                setPercent(100);
            }
            else{
                setPercent((food/fbudget)*100);
            }
        } else if(inEntertainment) {
            setEBudget(event.target.value);
            if(entertainment > ebudget){
                setEntertainment(ebudget);
            }
            if((entertainment/ebudget)*100 > 100){
                setPercent(100);
            }
            else{
                setPercent((entertainment/ebudget)*100);
            }
        } else {
            if(misc > mbudget){
                setMisc(mbudget);
            }
            setMBudget(event.target.value);
            if((misc/mbudget)*100 > 100){
                setPercent(100);
            }
            else{
                setPercent((misc/mbudget)*100);
            }
        }
    }

    function handleAmountChange(event) {
        setAmount(event.target.value);
    }

    useEffect(() => {
        if(inHousing){
            if((housing/hbudget)*100 > 100){
                setPercent(100);
            }
            else{
                setPercent((housing/hbudget)*100);
            }
            
        } else if(inFood){
            if((food/fbudget)*100 > 100){
                setPercent(100);
            }
            else{
                setPercent((food/fbudget)*100);
            }
            
        } else if(inEntertainment) {
            if((entertainment/ebudget)*100 > 100){
                setPercent(100);
            }
            else{
                setPercent((entertainment/ebudget)*100);
            }
            
        } else {
            if((misc/mbudget)*100 > 100){
                setPercent(100);
            }
            else{
                setPercent((misc/mbudget)*100);
            }
        
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
            return <h1 className="title">Miscellaneous</h1>
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

    const displayFeedback = ()=>{
        if(inHousing){
            return <div> { housing >= hbudget ? <p className="feedback">You have reached your budget</p> : <p className="feedback">Good job! </p> } </div>
        } else if(inFood){
            return <div> { food >= fbudget ? <p className="feedback">You have reached your budget</p> : <p className="feedback">Good job! </p>} </div> 
        } else if(inEntertainment) {
            return <div>  { entertainment >= ebudget ? <p className="feedback">You have reached your budget</p> : <p className="feedback">Good job! </p>} </div> 
        } else {
            return <div> { misc >= mbudget ? <p className="feedback">You have reached your budget</p> : <p className="feedback">Good job! </p>} </div> 
        }
    }

    return (
        <div className="dashboard-page">
            <div className="navigate_container">
                <div className="navigate-flags">
                    <button className="navigate nav-home" onClick={() => handleHousingClick()}><i className="fas fa-home"></i></button>
                    <div className={`flag ${inHousing ? "f-home" : "hidden-flag"}`}></div>
                </div>
                <div className="navigate-flags">
                <button className="navigate nav-food" onClick={() => handleFoodClick()}><i className="fas fa-utensils"></i></button>
                    <div className={`flag ${inFood ? "f-food" : "hidden-flag"}`}></div>
                </div>
                <div className="navigate-flags">
                <button className="navigate nav-mov" onClick={() => handleEntertainmentClick()}><i className="fas fa-film"></i></button>
                    <div className={`flag ${inEntertainment ? "f-mov" : "hidden-flag"}`}></div>
                </div>
                <div className="navigate-flags">
                <button className="navigate nav-misc" onClick={() => handleMiscClick()}><i className="fas fa-tags"></i></button>
                    <div className={`flag ${inMisc ? "f-misc" : "hidden-flag"}`}></div>
                </div>
            </div>
            <div className="dashboard-top">
                <h1 className="cat-title">{displayTitle()}</h1>
                <form className="budget_form">
                    <label className="budget-label">Budget: </label>
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
            {displayFeedback()}
            <Link to="/">Home</Link>
            <button>reset</button>
        </div>
    )}

export default Dashboard;
