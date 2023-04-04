import { ItemListPresentation } from "./ItemListPresentation";

export const ItemListContainer = ({ saludos }) => {
  const greetings = "Hola CoderHouse desde ItemList";

  return (
    <div>
      <h1>{saludos}</h1>
      <div>
        <ItemListPresentation greetings={greetings} />
      </div>
    </div>
  );
};
