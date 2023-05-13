import "./App.css";
import { NavbarContainer } from "./components/Navbar/NavbarContainer";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import { CounterContainer } from "./components/Counter/CounterContainer";
import { Form } from "./components/Form/Form";
import FetchingData from "./components/FetchingData/FetchingData";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContainer } from "./components/Cart/CartContainer";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<NavbarContainer />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:categoria"
              element={<ItemListContainer />}
            />
            <Route path="ItemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/Form" element={<Form />} />
            <Route path="/login" element={<h3> Este es el login</h3>} />
            <Route path="/Item" element={<h1>Item</h1>} />

            <Route path="*" element={<h2>404 Not Found</h2>} />
            <Route path="/portal" element={<h2>Portal de Compras</h2>} />
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
