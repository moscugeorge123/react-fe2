import { useState } from "react";

function App() {
  console.log("RENDERED");
  const [number, setNumber] = useState(0);

  return (
    <>
      <p>{number}</p>
      <button onClick={() => setNumber(Math.random())}>Generate random</button>
    </>
  );
}

export default App;
