import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

export const CartPresentation = ({
  cart,
  borrarProducto,
  total,
  vaciarCarroAlert,
  navigate,
  totalProductos,
}) => {
  return (
    <Grid container flex justifyContent="space-center">
      <Grid item xs={11} sm={9}>
        {cart.map((eL) => {
          return (
            <div
              key={eL.id}
              style={{
                width: "90%",
                height: "15px",
                display: "Flex",
                justifyContent: "space-between",
                marginBottom: "15px",
                alignItems: "center",
                border: "1px solid grey",
                borderRadius: "10px",
                margin: "15px 15px 15px 15px ",
                padding: "15px 15px 15px 15px",
              }}
            >
              <div>
                <img alt="Foto producto" width="30px" src={eL.img} />
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
      </Grid>

      <Grid
        item
        xs={11}
        sm={3}
        style={{
          width: "350px",
          height: "750px",
          borderLeft: "2px double grey",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          paddingLeft: "25px",
          paddingRight: "15px",
        }}
      >
        <h2>Descripcion del carrito:</h2>
        <h3>Cantidad de productos: {totalProductos} </h3>
        <h3>El total del carrito es: ${total}.-</h3>

        <div
          style={{
            display: "flex",
            marginRight: "15px",
          }}
        >
          {cart.length > 0 ? (
            <Button onClick={vaciarCarroAlert} variant="contained">
              Vaciar Carrito
            </Button>
          ) : (
            <Button onClick={() => navigate("/")} variant="contained">
              Comprar productos
            </Button>
          )}

          {cart.length < 1 ? (
            <></>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate("/checkout")}
            >
              Terminar Compra
            </Button>
          )}
        </div>
      </Grid>
    </Grid>
  );
};
