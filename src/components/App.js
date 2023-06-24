import React, { useState } from 'react'
import Button from './Button';

const App = () => {

    const buttons = ["C", "/", "*", "-", "7", "8", "9", "+", "4", "5", "6", "1", "2", "3", "=", "0", ".", ""]
    let [solution, setSolution] = useState("");

    function handleClick(id) {
        if (id === "=") {
            try {
                console.log(eval(solution));
                if (eval(solution) != "undefined") {
                    setSolution(eval(solution))
                }
            } catch (error) {
                setSolution("Error");
            }


        } else if (id == "C") {
            setSolution("");
        } else {
            setSolution(() => solution + id);
        }
    }

    console.log(solution);
    return (
        <div className='container Calculator'>
            <div className='expression' id="calci">{solution}</div>
            <div className="button-container">
                {
                    buttons.map((button) => (
                        <Button id={button} handleClick={handleClick}></Button>
                    ))
                }
            </div>
        </div>


    )
}


export default App;