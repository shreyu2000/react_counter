import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const addValue = ()=>{
    setCount(count++);
  }
  const removeValue = () =>{
    setCount(count--);
  }

  return (
    <>
      <h1>SHREAY DAKE</h1>
      <h2>React Counter : {count}</h2>

      <button onClick={addValue}>Add value :{count}</button> 
      <br/>
      <button onClick={removeValue}>Remove Value : {count}</button>
    </>
  );
}

export default App;
