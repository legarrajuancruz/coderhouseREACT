import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import { CounterContainer } from "./components/Counter/CounterContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <ItemListContainer />
      <Footer />
      <CounterContainer />
    </div>
  );
}

export default App;
