import React, { useState, useEffect, useContext } from "react";
import { ItemDetailPresentation } from "./ItemDetailPresentation";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { agregarAlCarrito, obtenerStockPorId } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    const itemCollection = collection(db, "products");
    const refDoc = doc(itemCollection, id);

    getDoc(refDoc)
      .then((res) => setProduct({ ...res.data(), id: res.id }))
      .catch((err) => console.log(err));
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
    <div
      style={{
        width: "100%",
        paddingTop: "2%",
        paddingBottom: "2%",
        alignItems: "center",
      }}
    >
      <div>
        <ItemDetailPresentation
          product={product}
          agregar={agregar}
          cantidadTotal={cantidadTotal}
        />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
