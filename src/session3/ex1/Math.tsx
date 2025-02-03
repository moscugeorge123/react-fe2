import { useState } from "react";
import { Random } from "./Random";
import { Sum } from "./Sum";

export function Math() {
  const [numbers, setNumbers] = useState<[number, number]>([NaN, NaN]);
  const [sum, setSum] = useState(NaN);

  const acceptNumbers = (n1: number, n2: number) => {
    setNumbers([n1, n2]);
    console.log(n1, n2);
  };

  const acceptSum = (sum: number) => {
    setSum(sum);
  };

  return (
    <>
      <p>
        Numbers: {numbers[0]} {numbers[1]}
      </p>
      <p>Sum: {sum}</p>
      <Random sendNumbers={acceptNumbers} />
      <Sum sendSum={acceptSum} numbers={numbers} />
    </>
  );
}
