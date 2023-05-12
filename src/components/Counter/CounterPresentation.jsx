import Button from "@mui/material/Button";
import { Link, Routes } from "react-router-dom";
export const CounterPresentation = ({
  counter,
  user,
  sumar,
  restar,
  agregar,
}) => {
  return (
    <div
      style={{
        height: "25px",
        display: "Flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "15px",
        marginTop: "25px",
        marginBottom: "25px",
        paddingRight: "15px",
        paddingLeft: "15px",
      }}
    >
      <Button variant="contained" onClick={sumar}>
        +
      </Button>{" "}
      <h2>{counter}</h2>
      <Button variant="contained" onClick={restar}>
        -
      </Button>
      <Button variant="outlined" onClick={() => agregar(counter)}>
        Agregar al carrito
      </Button>
      <Link to="/cart">
        <Button variant="contained">Terminar la Compra</Button>
      </Link>
    </div>
  );
};
