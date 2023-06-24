import React from "react";



const Button = ({id,handleClick}) => {
    
    const className = `button button-${id}`;
    let btnId;
    if (id == "/") {
        btnId = "btn-div";
    } else if (id == "="){
        btnId = "equal";
    } else if (id=="+") {
       btnId = "plus"
    }else{
     btnId = `btn-${id}`;
    }
   

    return (
        <button className={className} id={btnId} onClick={()=>handleClick(id)}>{id}</button>
    )
}

export default Button;