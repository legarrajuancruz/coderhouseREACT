import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export const CartPresentation = ({
  cart,
  borrarProducto,
  total,
  vaciarCarroAlert,
}) => {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      {cart.map((eL) => {
        return (
          <div
            key={eL.id}
            style={{
              width: "70%",
              height: "70px",
              display: "Flex",
              justifyContent: "space-between",
              gap: "15px",
              marginBottom: "15px",
              alignItems: "center",
              border: "1px solid grey",
              borderRadius: "10px",
              margin: "15px 15px 15px 15px ",
              padding: "0 15px 0 15px",
            }}
          >
            <div>
              <img width="50px" src={eL.img} />
            </div>

            <h2>{eL?.title}</h2>
            <h3>${eL?.price}</h3>
            <h3>Cantidad: {eL?.quantity}</h3>
            <Button variant="contained" onClick={() => borrarProducto(eL.id)}>
              Eliminar
            </Button>
          </div>
        );
      })}
      <div
        style={{
          width: "30%",
          border: "1px solid grey",
          borderRadius: "10px",
          margin: "15px 15px 15px 15px ",
          padding: "15px 15px 15px 15px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <h3>El total del carrito es ${total}.-</h3>

        {cart.length > 0 ? (
          <Button onClick={vaciarCarroAlert} variant="contained">
            Vaciar Carrito
          </Button>
        ) : (
          <Link to="/">
            <Button variant="contained">Comprar productos</Button>
          </Link>
        )}
      </div>
    </div>
  );
};
