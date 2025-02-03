interface SumProps {
  sendSum: (sum: number) => void;
  numbers: [number, number];
}

export function Sum({ sendSum, numbers }: SumProps) {
  const makeSum = (n1: number, n2: number): number => {
    return n1 + n2;
  };

  return (
    <button onClick={() => sendSum(makeSum(numbers[0], numbers[1]))}>
      Calc Sum
    </button>
  );
}
