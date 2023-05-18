import { useState, useEffect } from "react";
import { ItemListPresentation } from "./ItemListPresentation";
import { useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import { db } from "../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoria } = useParams();

  useEffect(() => {
    let consulta;
    const itemCollection = collection(db, "products");

    if (categoria) {
      let itemColletionFiltrado = query(
        itemCollection,
        where("category", "==", categoria)
      );
      consulta = itemColletionFiltrado;
    } else {
      consulta = itemCollection;
    }

    getDocs(consulta)
      .then((res) => {
        const products = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setItems(products);
      })
      .catch((error) => console.log(error));
  }, [categoria]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
        marginBottom: "50px",
        fontSize: "12px",
      }}
    >
      {items.length === 0 && (
        <div>
          <PacmanLoader color="#3641d6" size={35} />
          Loading...
        </div>
      )}
      <ItemListPresentation items={items} />
    </div>
  );
};
