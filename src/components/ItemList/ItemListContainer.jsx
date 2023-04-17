import { useState, useEffect } from "react";
import { ItemListPresentation } from "./ItemListPresentation";
import axios from "axios";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let data = axios.get("http://localhost:5000/products");
    data.then((res) => setItems(res.data));
  }, []);

  return (
    <div>
      <div>
        <ItemListPresentation items={items} />
      </div>
    </div>
  );
};
