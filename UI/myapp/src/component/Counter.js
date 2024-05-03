
import { useState } from "react";

// function Counter(){
//      const[counter]=useState(10);
//      return(
//         <div>Counter:{counter}</div>
//      )
        
     
// }
export default Counter;
 
function Counter() {     const [count,setCount]=useState(10);   
      function incrementCount()   
        {         setCount(count+1);     }   
          return (         <div>     
                <h1> counter : {count}</h1>     
                    <button onClick={incrementCount}>Increment</button>
                     </div>     )     
                      } 