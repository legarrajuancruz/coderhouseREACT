import React, { useState, useEffect, useContext } from "react";
import { ItemDetailPresentation } from "./ItemDetailPresentation";
import { products } from "../ProductsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { agregarAlCarrito } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    let encontrado = products.find((prod) => prod.id === Number(id));
    setProduct(encontrado);
  }, [id]);

  const agregar = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };

    agregarAlCarrito(data);
  };

  return (
    <div>
      <ItemDetailPresentation product={product} agregar={agregar} />
    </div>
  );
};

export default ItemDetailContainer;
