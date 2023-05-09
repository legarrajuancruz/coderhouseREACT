import Button from "@mui/material/Button";

export const CartPresentation = ({
  cart,
  vaciarCarrito,
  borrarProducto,
  total,
}) => {
  return (
    <div>
      {cart.map((eL) => {
        return (
          <div
            key={eL.id}
            style={{
              height: "50px",
              display: "Flex",

              gap: "15px",
              marginBottom: "15px",
              alignItems: "center",
              border: "1px solid black",
              margin: "5px 5px 5px 5px ",
              padding: "0 0 0 5px",
            }}
          >
            <h2>{eL?.title}</h2>
            <h3>${eL?.price}</h3>
            <h3>Cantidad: {eL?.quantity}</h3>
            <Button variant="contained" onClick={() => borrarProducto(eL.id)}>
              Eliminar
            </Button>
          </div>
        );
      })}

      <Button onClick={vaciarCarrito} variant="contained">
        Vaciar Carrito
      </Button>
      <h3>El total del carrito es ${total}.-</h3>
    </div>
  );
};
