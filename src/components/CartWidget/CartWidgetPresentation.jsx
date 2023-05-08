import { Link } from "react-router-dom";
import estilos from "./CartWidget.module.css";
import { RiShoppingCartLine } from "react-icons/ri";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartWidgetPresentation = () => {
  const { cart } = useContext(CartContext);

  return (
    <Link to="/cart">
      <div className={estilos.CartWidgetPos}>
        <RiShoppingCartLine size={25} />
        <h3>{cart.length}</h3>
      </div>
    </Link>
  );
};
