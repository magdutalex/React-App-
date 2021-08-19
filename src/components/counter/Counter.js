import React, { useState, useEffect } from 'react';


const Counter = () => {

    const [count, setCount] = useState(0);
   
     useEffect(() => {
       console.log("Component has been mountend")
     }, []);

     useEffect(() => {
        console.log("Component has re-renderede")
     }, [count]);

    return (
        <div>
            <p>Numarul este: {count} </p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
};

 export default Counter;