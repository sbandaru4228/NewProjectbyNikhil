import React, { useState } from "react";

function Usestate(props) {
  const [color, setColor] = useState("red");

  const changeColor= () =>{
    if (color === "white") {
      setColor("blue");
    }else {
        setColor("yellow");
      }

  
  };
  return (
    <div>
      <h1>My favorite color is {color}</h1>
      <button type="button" onClick={changeColor}>
        Change Color
      </button>
    </div>
  );
}

export default Usestate;
