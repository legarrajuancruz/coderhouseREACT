import { createContext, useState } from "react";
import { Link } from "react-router-dom";

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
          return { ...eL, quantity: producto.quantity };
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

  const sumaTotal = () => {
    let total = cart.reduce((acumulador, eL) => {
      return acumulador + eL.price * eL.quantity;
    }, 0);
    return total;
  };

  const cantidadTotal = () => {
    let total = cart.reduce((acumulador, eL) => {
      return acumulador + eL.quantity;
    }, 0);
    return total;
  };

  const obtenerStockPorId = (id) => {
    let product = cart.find((eL) => eL.id === id);
    return product?.quantity;
  };

  let data = {
    cart,
    agregarAlCarrito,
    vaciarCarrito,
    borrarProducto,
    sumaTotal,
    cantidadTotal,
    obtenerStockPorId,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
