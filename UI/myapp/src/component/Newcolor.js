import { useState } from "react";


function Newcolor(){

    const[car,setcarcolor]=useState({
brand:"ford",
model:"mustang",
year:2017,
color:"red"
    });
    const changeColor=()=>{
        setcarcolor(previousState=>{
            return{...previousState,color:"blue"}
        })
    }
return(
<div>
    <h1>my new car is {car.brand}{car.model}{car.year}{car.color}</h1>
    <button type="text" onClick={changeColor}>newcolor</button>
</div>
)
}

export default Newcolor;