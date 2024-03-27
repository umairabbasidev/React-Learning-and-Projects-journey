import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);
  function addValue() {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  }
  function removeValue() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  function resetValue() {
    setCounter((counter = 0));
  }
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "200px" }}>
        <h2>Counter Value:{counter} </h2>
        <button onClick={addValue}>Add Value</button>
        <button onClick={removeValue} style={{ marginLeft: "5px" }}>
          Remove Value
        </button>
        <button onClick={resetValue} style={{ marginLeft: "5px" }}>
          Reset Value
        </button>
        
      </div>

      <div style={{textAlign: "center",}}>
        <h4> Counter guideline </h4>
          <p> (1) Allow adding button  value until counter reaches 20</p>
          <p> (2) Disable removal button when counter is at 0. </p>
        </div>
    </>
  );
}

export default App;
