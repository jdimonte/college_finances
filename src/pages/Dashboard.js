import { UserContext} from '../provider/UserProvider'
import '../Style.css';
import React, {useEffect, useContext, useState} from 'react'
import { Redirect,Link } from 'react-router-dom'
import Housing from '../components/housing'
import Food from '../components/food'
import Entertainment from '../components/entertainment'
import Misc from '../components/misc'

function Dashboard(setUserData){

    const user = useContext(UserContext);
    const [redirect, setRedirect] = useState(null);

    const [housing, setHousing] = useState(0);
    const [food, setFood] = useState(0);
    const [entertainment, setEntertainment] = useState(0);
    const [misc, setMisc] = useState(0);

    const [hbudget, setHBudget] = useState(0);
    const [fbudget, setFBudget] = useState(0);
    const [ebudget, setEBudget] = useState(0);
    const [mbudget, setMBudget] = useState(0);

    const [hbudgetOn, setHOn] = useState(true);
    const [fbudgetOn, setFOn] = useState(true);
    const [ebudgetOn, setEOn] = useState(true);
    const [mbudgetOn, setMOn] = useState(true);

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

    function displaySection() {
        if(inHousing){
            return <Housing housing={housing} setHousing={setHousing} hbudget={hbudget} setHBudget={setHBudget} hbudgetOn={hbudgetOn} setHOn={setHOn}/>
        } else if(inFood){
            return  <Food food={food} setFood={setFood} fbudget={fbudget} setFBudget={setFBudget} fbudgetOn={fbudgetOn} setFOn={setFOn}/>
        } else if(inEntertainment) {
            return <Entertainment entertainment={entertainment} setEntertainment={setEntertainment} ebudget={ebudget} setEBudget={setEBudget} ebudgetOn={ebudgetOn} setEOn={setEOn}/>
        } else {
            return <Misc misc={misc} setMisc={setMisc} mbudget={mbudget} setMBudget={setMBudget} mbudgetOn={mbudgetOn} setMOn={setMOn}/>
        }
    }

    function handleReset() {
        setHousing(0)
        setFood(0)
        setEntertainment(0)
        setMisc(0)
        setHBudget(0)
        setFBudget(0)
        setEBudget(0)
        setMBudget(0)
        setHOn(true)
        setFOn(true)
        setEOn(true)
        setMOn(true)
        handleHousingClick()
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
            {displaySection()}
            <div className="footer">
            <Link to="/">Home</Link>
            <button className="reset-btn" onClick={handleReset}>reset</button>
            </div>
        </div>
    )}

export default Dashboard;
