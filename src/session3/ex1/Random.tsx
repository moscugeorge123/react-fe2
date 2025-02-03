interface RandomProps {
  sendNumbers: (n1: number, n2: number) => void;
}

export function Random({ sendNumbers }: RandomProps) {
  const generateNumber = () => {
    return Math.ceil(Math.random() * 100);
  };

  return (
    <button
      onClick={() => {
        sendNumbers(generateNumber(), generateNumber());
      }}
    >
      Generate Numbers
    </button>
  );
}
