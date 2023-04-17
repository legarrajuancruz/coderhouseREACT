import logo from "./logo.svg";
import "./App.css";
import { NavbarContainer } from "./components/Navbar/NavbarContainer";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import { CounterContainer } from "./components/Counter/CounterContainer";
import FetchingData from "./components/FetchingData/FetchingData";

function App() {
  return (
    <div className="App">
      <NavbarContainer />
      <ItemListContainer />
      <Home />
      <Footer />
      <CounterContainer />
      <FetchingData />
    </div>
  );
}

export default App;
