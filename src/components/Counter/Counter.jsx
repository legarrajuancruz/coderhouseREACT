import { useState } from "react";

export const Counter = () => {
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
      <h2>{counter}</h2>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <button onClick={reiniciar}>Reiniciar</button>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      <h1>{user}</h1>
    </div>
  );
};
