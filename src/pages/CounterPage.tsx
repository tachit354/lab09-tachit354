import { useState } from "react";

export default function CounterPage() {
  const [Counter,setCouter] = useState(0);

  const addCouter = () => {
      setCouter(Counter + 1);
    }
  return (
    <div className="container text-center">
      <h2>Counter Page</h2>
      {/* Result Text */}
      <p>Counter: {Counter} </p>
      <button onClick={addCouter}>Increase</button>
    </div>
  );
}
