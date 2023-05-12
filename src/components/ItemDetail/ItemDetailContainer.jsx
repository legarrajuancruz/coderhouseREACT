import React, { useState, useEffect, useContext } from "react";
import { ItemDetailPresentation } from "./ItemDetailPresentation";
import { products } from "../ProductsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { agregarAlCarrito, obtenerStockPorId } = useContext(CartContext);

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

    Swal.fire({
      position: "center",
      icon: "success",
      title: `Se grego al carrito ${product.title}`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  let cantidadTotal = obtenerStockPorId(product.id);

  return (
    <div>
      <ItemDetailPresentation
        product={product}
        agregar={agregar}
        cantidadTotal={cantidadTotal}
      />
    </div>
  );
};

export default ItemDetailContainer;
