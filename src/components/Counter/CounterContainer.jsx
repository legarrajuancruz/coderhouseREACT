import { useState } from "react";
import { CounterPresentation } from "./CounterPresentation";
import { Alert } from "@mui/material";

export const CounterContainer = ({ stock, agregar }) => {
  const [counter, setCounter] = useState(0);

  let sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      alert("stock maximo");
    }
  };

  const restar = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <CounterPresentation
        counter={counter}
        sumar={sumar}
        restar={restar}
        agregar={agregar}
      />
    </div>
  );
};
