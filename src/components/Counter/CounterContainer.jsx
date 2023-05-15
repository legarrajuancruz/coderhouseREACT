import { useEffect, useState } from "react";
import { CounterPresentation } from "./CounterPresentation";
import Swal from "sweetalert2";

export const CounterContainer = ({ stock, agregar, initial = 1 }) => {
  const [counter, setCounter] = useState(initial);

  useEffect(() => {
    setCounter(initial);
  }, [initial]);

  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Stock Maximo!",
      });
    }
  };

  const restar = () => {
    if (counter > 1) {
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
