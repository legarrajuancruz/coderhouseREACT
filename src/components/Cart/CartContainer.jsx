import { useContext } from "react";
import { CartPresentation } from "./CartPresentation";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

export const CartContainer = () => {
  const { cart, borrarProducto, sumaTotal, vaciarCarrito } =
    useContext(CartContext);

  let total = sumaTotal();

  const vaciarCarroAlert = () => {
    Swal.fire({
      title: "Deseas guardar los cambios ?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Eliminar",
      denyButtonText: `Descartar`,
    }).then((result) => {
      if (result.isConfirmed) {
        vaciarCarrito();
        Swal.fire("Se vacio el carrito", "", "success");
      } else if (result.isDenied) {
        Swal.fire("No se vacio el carrito", "", "error");
      }
    });
  };

  return (
    <div>
      <CartPresentation
        cart={cart}
        borrarProducto={borrarProducto}
        total={total}
        vaciarCarroAlert={vaciarCarroAlert}
      />
    </div>
  );
};
