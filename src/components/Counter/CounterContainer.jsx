import { useState } from "react";
import { CounterPresentation } from "./CounterPresentation";

export const CounterContainer = () => {
  const [counter, setCounter] = useState(0);
  const [user, setUser] = useState("");

  let sumar = () => {
    setCounter(counter + 1);
  };

  const restar = () => {
    setCounter(counter - 1);
  };

  const reiniciar = () => {
    setCounter(0);
  };

  const login = () => {
    setUser("Hola Juan Cruz");
  };

  const logout = () => {
    setUser("");
  };

  return (
    <div>
      <CounterPresentation
        counter={counter}
        sumar={sumar}
        restar={restar}
        reiniciar={reiniciar}
        login={login}
        logout={logout}
        user={user}
      />
    </div>
  );
};
