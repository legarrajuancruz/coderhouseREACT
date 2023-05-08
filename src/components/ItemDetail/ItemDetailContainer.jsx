import React, { useState, useEffect } from "react";
import { ItemDetailPresentation } from "./ItemDetailPresentation";
import { products } from "../ProductsMock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let encontrado = products.find((prod) => prod.id === Number(id));
    setProduct(encontrado);
  }, [id]);

  const agregar = (cantidad) => {
    console.log(
      `se agregaron  al carrito ${cantidad} unidad/es ${product.title}`
    );
  };

  return (
    <div>
      <ItemDetailPresentation product={product} agregar={agregar} />
    </div>
  );
};

export default ItemDetailContainer;
