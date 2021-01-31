import React, { useState, useEffect } from 'react';
import ProgressBar from './progressbar'

function Food({food, setFood, fbudget, setFBudget, fbudgetOn, setFOn}) {
    const [amount, setAmount] = useState(0)
    const [percent, setPercent] = useState(0)

    function handleBudgetChange(e) {
        setFBudget(e.target.value)
    }

    function handleAmountChange(e) {
        setAmount(e.target.value)
    }

    function handleButtonClick() {
        var temp = Number(food) + Number(amount);
        setFood(temp);
        setAmount(0)
    }

    function handleChangeScreen() {
        setFOn(false)
    }

    useEffect(() => {
            if((food/fbudget)*100 > 100){
                setPercent(100);
            }
            else{
                setPercent((food/fbudget)*100);
            }
    }, [food, fbudget]);

    return (
        <div className="dashboard-top">
                <h1 className="cat-title">Food</h1>
                { fbudgetOn ? 
                <div>
                    <form className="budget_form">
                        <label className="budget-label">Budget: </label>
                            <input
                            type="number"
                            name="budget"
                            value={fbudget}
                            onChange={handleBudgetChange}
                        />
                    </form>
                    <h1 className="title">Budget: ${fbudget}</h1>
                    <button onClick={handleChangeScreen} className="add">Set budget</button>
                </div>
                :
                <div>
                    <h1>Budget: ${fbudget}</h1>
                    <h2 className="new_purchase">New Purchase</h2>
                    <form className="amount_form">
                        <label>Amount: </label>
                        <input 
                        type="number"
                        name="amount"
                        value={amount}
                        onChange={handleAmountChange}
                        />
                    </form>
                    <button className="add" onClick={handleButtonClick}>Add</button>

                    <h2 className="money_left">Left to spend this week:</h2>
                    <h2 className="title">{food}/{fbudget}</h2>
                    <div className="App">
                    <ProgressBar bgcolor={"#6a1b9a"} completed={percent} />
                    </div>
                    { food >= fbudget ? <p className="feedback">You have reached your budget</p> : <p className="feedback">Good job! </p> }
                </div>
            }
        </div>
    )
}

export default Food;

