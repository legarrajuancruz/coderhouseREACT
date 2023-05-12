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

  return (
    <div>
      {items.length === 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
            marginBottom: "50px",
            fontSize: "12px",
          }}
        >
          <PacmanLoader color="#3641d6" size={35} />; Loading...
        </div>
      )}
      <ItemListPresentation items={items} />
    </div>
  );
};
