import estilo from ".//ItemDetail.module.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { CounterContainer } from "../Counter/CounterContainer";

export const ItemDetailPresentation = ({ product, agregar, cantidadTotal }) => {
  return (
    <div className={estilo.ubicacion}>
      <h1> {product.title} </h1>
      <div>
        <img width="350px" src={product.img} alt="productos" />
      </div>

      <h4> {product.description}</h4>
      <h2> ${product.price} </h2>
      <h3>Stock {product.stock} Unidades</h3>

      {product.stock > 0 ? (
        <div>
          <CounterContainer
            stock={product.stock}
            agregar={agregar}
            initial={cantidadTotal}
          />
        </div>
      ) : (
        <h3>"No hay Stock"</h3>
      )}

      <div
        style={{
          marginTop: "15px",
          marginBottom: "15px",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <Button variant="contained">Volver</Button>
        </Link>
      </div>
    </div>
  );
};
