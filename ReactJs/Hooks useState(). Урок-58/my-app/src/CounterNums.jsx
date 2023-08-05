import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1)
  }

  return (
    <div className="main-div" style={{height:"100vh"}}>
      <div>
        <h1 className="counter-text">{count}</h1>
        <div className="d-flex">
          <button onClick={handleIncrement} className="btn btn-submit">Submit</button>
        </div>
      </div>
    </div>
  );
}