import { useState } from "react";

function CounterObject() {     
    const empo={
        name:"Sathi",
        age:28,
        salary:100000,
        married:true
    
    }
    let [user,setUser]=useState(empo);  
    
    function incrementAge()   
      {         setUser({...user,age:user.age+1}); 
        }   
        return ( 
            <>
<h1>user name is{user.name} and age is {user.age}</h1>
<h1>user salary is{user.salary} and age is {user.married}</h1>
<button onClick={incrementAge}>incrementAge</button>
</>
              )
        }

        export default CounterObject;