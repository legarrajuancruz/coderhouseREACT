import { useState, useEffect } from "react";
import { ItemListPresentation } from "./ItemListPresentation";
import { products } from "../ProductsMock";
import { useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoria } = useParams();

  useEffect(() => {
    const productosFiltrados = products.filter(
      (prod) => prod.category === categoria
    );

    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoria ? productosFiltrados : products);
      }, 1000);
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoria]);

  if (items.length < 1) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "cebter",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <PacmanLoader color="#3641d6" size={35} />;
      </div>
    );
  }

  return (
    <div>
      <div>
        <ItemListPresentation items={items} />
      </div>
    </div>
  );
};
