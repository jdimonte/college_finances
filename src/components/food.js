import '../Style.css';
import React, {useState} from 'react'

function Food(){
    const [costFood, setCostFood] = useState(0);

    const handleButtonClick = () => {
        setCostFood(costFood => costFood + 1);
    }

    return (
        <div>
            <button onClick={handleButtonClick}>Add Food</button>
        </div>
    );
}

export default Food;