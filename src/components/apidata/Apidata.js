import React, { useState, useEffect} from "react";

const Apidata = () => {
const [dataFromApi, setDataFromApi] = useState("");

useEffect(()=>{
 fetch("https://jsonplaceholder.typicode.com/todos/1")
 .then((res) => res.text())
 .then((data)=> setDataFromApi(data));
});
    return (
     <div>
         <p>{dataFromApi}</p>
     </div>
    );
};

export default Apidata;