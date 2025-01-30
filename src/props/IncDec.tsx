interface IncDecProps {
  increment: () => void;
  decrement: () => void;
  getValue: (value: number) => void;
}

export function IncDec({ increment, decrement, getValue }: IncDecProps) {
  return (
    <>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
      <button onClick={() => getValue(5)}>Send Value</button>
    </>
  );
}
