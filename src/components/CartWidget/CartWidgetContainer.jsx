import { Link } from "react-router-dom";
import estilos from "./CartWidget.module.css";
import { RiShoppingCartLine } from "react-icons/ri";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartWidgetContainer = () => {
  const { cantidadTotal } = useContext(CartContext);

  let total = cantidadTotal();
  return (
    <Link to="/cart">
      <div className={estilos.CartWidgetPos}>
        <RiShoppingCartLine size={25} />

        {total > 0 ? <h3 className={estilos.bubble}>{total}</h3> : <></>}
      </div>
    </Link>
  );
};
