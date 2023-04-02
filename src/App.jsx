import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { ItemList } from "./components/ItemList/ItemList";
import { Counter } from "./components/Counter/Counter";

function App() {
  let saludo = "Hola Coderhouse, PROP padre APP a hijo ItemList";

  return (
    <div className="App">
      <Navbar />
      <Home />
      <ItemList saludo={saludo} edad={38} nombre={"Juan Cruz"} />
      <Footer />
      <Counter />
    </div>
  );
}

export default App;
