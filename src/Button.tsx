interface ButtonProps {
  text?: string;
  onClick: (e: React.MouseEvent) => void;
}

export function Button({ text, onClick }: ButtonProps) {
  return <button onClick={onClick}>{text || "Default text"}</button>;
}
