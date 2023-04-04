import estilos from "./CartWidget.module.css";
import { RiShoppingCartLine } from "react-icons/ri";

export const CartWidgetPresentation = () => {
  return (
    <div className={estilos.CartWidgetPos}>
      <RiShoppingCartLine size={25} />
      <h3>0</h3>
    </div>
  );
};
