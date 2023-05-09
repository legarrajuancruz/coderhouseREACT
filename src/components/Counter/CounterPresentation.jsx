import Button from "@mui/material/Button";
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
        height: "30px",
        display: "Flex",
        justifyContent: "center",
        gap: "15px",
        marginBottom: "15px",
        alignItems: "center",
      }}
    >
      <Button variant="contained" onClick={sumar}>
        +
      </Button>{" "}
      <h2>{counter}</h2>
      <Button variant="contained" onClick={restar}>
        -
      </Button>
      <Button
        style={{ border: "1px solid blue" }}
        onClick={() => agregar(counter)}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};
