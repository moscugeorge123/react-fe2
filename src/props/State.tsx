import { useState } from "react";

interface Position {
  x?: number;
  y: number;
}

const COLORS = ["red", "green", "blue"];

export function State() {
  const [color, setColor] = useState(COLORS[0]);
  const [text, setText] = useState("");
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const changeColor = () => {
    const colorIndex = Math.floor(Math.random() * COLORS.length);
    setColor(COLORS[colorIndex]);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const changePosition = () => {
    setPosition((prevPosition) => ({ ...prevPosition, y: prevPosition.y + 1 }));
  };

  const style = {
    height: 100,
    width: 100,
    backgroundColor: color,
  };

  return (
    <section>
      <div style={style}></div>
      <button onClick={changeColor}>Change Color</button>

      <input type="text" onChange={handleChange} />
      <p>{text}</p>

      <button onClick={changePosition}>
        You clicked me {position.y} - {position.x}
      </button>
    </section>
  );
}
