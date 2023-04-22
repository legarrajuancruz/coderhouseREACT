import React, { useState, useEffect } from "react";
import { ItemDetailPresentation } from "./ItemDetailPresentation";
import { products } from "../ProductsMock";
import useCounter from "../../utils/hooks/useCounter";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { counter, incrementar, decrementar, resetear } = useCounter();

  let id = 3;

  useEffect(() => {
    let encontrado = products.find((prod) => prod.id == id);
    setProduct(encontrado);
  }, [id]);

  console.log(product);

  return (
    <div>
      <ItemDetailPresentation product={product} />
      <h1>{counter}</h1>
      <button onClick={incrementar}>SUMAR desde Detail</button>
      <button onClick={decrementar}>RESTAR desde Detail</button>
      <button onClick={resetear}>RESET</button>
    </div>
  );
};

export default ItemDetailContainer;
