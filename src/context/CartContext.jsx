import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const existe = (id) => {
    let existeEnCarrito = cart.some((eL) => eL.id === id);
    return existeEnCarrito;
  };

  const agregarAlCarrito = (producto) => {
    let existeEnCarrito = existe(producto.id);
    if (existeEnCarrito) {
      let nuevoCarrito = cart.map((eL) => {
        if (eL.id === producto.id) {
          return { ...eL, quantity: eL.quantity + producto.quantity };
        } else {
          return eL;
        }
      });

      setCart(nuevoCarrito);
    } else {
      setCart([...cart, producto]);
    }
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  const borrarProducto = (id) => {
    const productosFiltrados = cart.filter((eL) => eL.id !== id);
    setCart(productosFiltrados);
  };

  let data = { cart, agregarAlCarrito, vaciarCarrito, borrarProducto };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
