import { useRef } from "react";

const Prueba = () => {
  const inputCodeRef = useRef(null);

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      console.log("Enivamos los datos a la base de datos");
      inputCodeRef.current.focus();
    }
  };

  return (
    <form action="">
      <label htmlFor=""></label>
      <input type="text" ref={inputCodeRef} />
      <label htmlFor=""></label>
      <input type="text" />
      <label htmlFor=""></label>
      <input type="text" />
      <label htmlFor=""></label>
      <input type="text" />
      <label htmlFor=""></label>
      <input type="text" />
      <button type="submit" onKeyUp={handleKeyUp}>
        Enviar
      </button>
    </form>
  );
};

export { Prueba };
