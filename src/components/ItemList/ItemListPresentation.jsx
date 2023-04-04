import estilos from "../ItemList/ItemList.module.css";

export const ItemListPresentation = ({ greetings }) => {
  return <div className={estilos.Saludos}>{greetings}</div>;
};
