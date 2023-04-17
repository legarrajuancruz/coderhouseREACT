import React, { useState, useEffect } from "react";
import { ItemDetailPresentation } from "./ItemDetailPresentation";
import { products } from "../ProductsMock";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  let id = 3;

  useEffect(() => {
    let encontrado = products.find((prod) => prod.id == id);
    setProduct(encontrado);
  }, [id]);

  console.log(product);

  return <ItemDetailPresentation product={product} />;
};

export default ItemDetailContainer;
