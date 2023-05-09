import { useContext } from "react";
import { CartPresentation } from "./CartPresentation";
import { CartContext } from "../../context/CartContext";

export const CartContainer = () => {
  const { cart, vaciarCarrito, borrarProducto, sumaTotal } =
    useContext(CartContext);

  let total = sumaTotal();

  return (
    <div>
      <CartPresentation
        cart={cart}
        vaciarCarrito={vaciarCarrito}
        borrarProducto={borrarProducto}
        total={total}
      />
    </div>
  );
};
