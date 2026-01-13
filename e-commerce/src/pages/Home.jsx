import { useEffect, useState } from "react";

const Home = () => {
  // useEffect(function, arreglo)

  const [saludo, setSaludo] = useState("Hola mundo");
  const [pagina, setPagina] = useState(1);
  const [search, setSearch] = useState(1);

  const handleClick = () => {
    setSaludo("Hola Caracola" + Math.random());
  };

  const handleClick2 = () => {
    setPagina(pagina + 1);
  };

  const handleClick3 = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    // esto puede pasar una o muchas veces.

    console.log("Trae productos de una API 2");
  }, []);

  useEffect(() => {
    // esto puede pasar una o muchas veces.

    console.log("Trae productos de una API 3");
  }, [pagina, search]);

  return (
    <>
      <h1>Mi primer E-commerce</h1>

      <button onClick={handleClick}>Cambiar saludo</button>
      <button onClick={handleClick2}>Cambiar pagina {pagina + 1}</button>
      <input type="text" name="search" value={search} onChange={handleClick3} />

      <p>{saludo}</p>
      <p>{pagina}</p>
    </>
  );
};

export { Home };
