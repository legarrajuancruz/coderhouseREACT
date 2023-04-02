import { ItemListPresentation } from "./ItemListPresentation";
import estilos from "./ItemList.modulo.css";
export const ItemListContainer = () => {
  const greetings = "Hola CoderHouse desde ItemList";

  return (
    <div className={estilos.bienvenida}>
      <ItemListPresentation greetings={greetings} />
    </div>
  );
};
