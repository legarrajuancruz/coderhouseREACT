import { useContext } from "react";
import { CartPresentation } from "./CartPresentation";
import { CartContext } from "../../context/CartContext";

export const CartContainer = () => {
  const { cart, vaciarCarrito, borrarProducto } = useContext(CartContext);

  return (
    <div>
      <CartPresentation
        cart={cart}
        vaciarCarrito={vaciarCarrito}
        borrarProducto={borrarProducto}
      />
    </div>
  );
};
