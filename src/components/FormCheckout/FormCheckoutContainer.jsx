import { FormCheckoutPresentation } from "./FormCheckoutPresentation";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import * as Yup from "yup";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

export const FormCheckoutContainer = () => {
  const { cart, sumaTotal, vaciarCarrito } = useContext(CartContext);

  const [orderID, setOrderID] = useState(null);

  const checkoutFn = (data) => {
    let total = sumaTotal();

    let dataOrder = {
      comprador: data,
      items: cart,
      total: total,
    };
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, dataOrder).then((res) => setOrderID(res.id));

    cart.map((mapeoProducto) =>
      updateDoc(doc(db, "products", mapeoProducto.id), {
        stock: mapeoProducto.stock - mapeoProducto.quantity,
      })
    );

    vaciarCarrito();
  };

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telefono: null,
      fecha: serverTimestamp(),
    },
    onSubmit: checkoutFn,
    validationSchema: Yup.object().shape({
      nombre: Yup.string()
        .required("campo obligatorio")
        .min(3, "El nombre debe tener al  menos 3 caracteres")
        .max(
          15,
          "El nombre es demasiado largo, debe tener menos de 15 caracteres"
        ),
      email: Yup.string()
        .email("Escribe un email valido")
        .required("campo obligatorio"),
      telefono: Yup.number().required("campo obligatorio"),
    }),
    validateOnChange: false,
  });

  return (
    <div>
      {orderID ? (
        <div>
          <h2>Su orden de compra fue procesada</h2>
          <h3>Su numero de orden es: {orderID}</h3>
        </div>
      ) : (
        <FormCheckoutPresentation
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};
