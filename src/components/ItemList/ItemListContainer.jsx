import { useState, useEffect } from "react";
import { ItemListPresentation } from "./ItemListPresentation";
import { products } from "../ProductsMock";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div>
        <ItemListPresentation items={items} />
      </div>
    </div>
  );
};
