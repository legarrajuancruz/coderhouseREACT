import { useContext } from "react";
import { CartPresentation } from "./CartPresentation";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const CartContainer = () => {
  const { cart, borrarProducto, sumaTotal, vaciarCarrito, cantidadTotal } =
    useContext(CartContext);

  let total = sumaTotal();
  const navigate = useNavigate();
  const totalProductos = cantidadTotal();

  const vaciarCarroAlert = () => {
    Swal.fire({
      title: "Deseas vaciar el carrito ?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Vaciar",
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
        navigate={navigate}
        totalProductos={totalProductos}
      />
    </div>
  );
};
