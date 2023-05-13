import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export const CartPresentation = ({
  cart,
  borrarProducto,
  total,
  vaciarCarroAlert,
  navigate,
}) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
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
              marginBottom: "15px",
              alignItems: "center",
              border: "1px solid grey",
              borderRadius: "10px",
              margin: "15px 15px 1px 15px ",
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
          position: "absolute",
          height: "25%",
          borderLeft: "1px solid grey",
          borderbot: "1px solid grey",
          padding: "15px 15px 15px 15px",

          right: "2vh",
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

        {cart.length < 1 ? (
          <></>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate("/form")}
          >
            Terminar Compra
          </Button>
        )}
      </div>
    </div>
  );
};
