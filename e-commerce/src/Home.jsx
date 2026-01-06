import { useState } from "react";
import { Button } from "./components/Button";

export const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Coderhouse E-commerce</h1>

      <Button id="btn-1" classes="btn btn-primary" dataToggle="modal" type="button" text="Click Me" />

      <Button id="btn-2" classes="btn btn-secondary" dataToggle="dropdown" type="button" text="Submit" />
    </div>
  );
};
