import { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);

  const suma = () => {
    setNum(num + 1);
  };

  const resta = () => {
    setNum(num - 1);
  };

  return (
    <>
      <button onClick={resta}>-</button>
      <input type="text" value={num} />
      <button onClick={suma}>+</button>
    </>
  );
};

export { Counter };
