import { useState } from "react";
import { IncDec } from "./props/IncDec";

function App() {
  const [number, setNumber] = useState(0);

  const getValue = (value: number) => {
    setNumber(value);
  };

  return (
    <>
      <p>parent value: {number}</p>
      <IncDec
        increment={() => setNumber((oldNumber) => oldNumber + 1)}
        decrement={() => setNumber((oldNumber) => oldNumber - 1)}
        getValue={getValue}
      />
    </>
  );
}

export default App;
