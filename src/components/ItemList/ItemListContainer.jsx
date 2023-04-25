import { useState, useEffect } from "react";
import { ItemListPresentation } from "./ItemListPresentation";
import { products } from "../ProductsMock";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoria } = useParams();

  useEffect(() => {
    const productosFiltrados = products.filter(
      (prod) => prod.category === categoria
    );

    const tarea = new Promise((resolve, reject) => {
      resolve(categoria ? productosFiltrados : products);
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoria]);

  return (
    <div>
      <div>
        <ItemListPresentation items={items} />
      </div>
    </div>
  );
};
