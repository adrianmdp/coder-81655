import "./App.css";
import { Counter } from "./components/Counter";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Usuarios";
import { Services } from "./pages/Services";

function App() {
  // const [mostrar, setMostrar] = useState(false);

  // const handleClick = () => {
  //   setMostrar(!mostrar);
  // };

  return (
    <>
      {/* <Counter />
      <div class="btn" id="asd" data-value="hola"></div> */}
      {/* <button onClick={handleClick}>Mostrar home</button> */}
      {/* {mostrar && <Home />} */}
      {/* <Contact /> */}
      <Services />
    </>
  );
}

export default App;
