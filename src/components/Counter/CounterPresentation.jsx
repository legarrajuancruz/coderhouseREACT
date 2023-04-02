export const CounterPresentation = ({
  counter,
  user,
  sumar,
  restar,
  reiniciar,
  login,
  logout,
}) => {
  return (
    <div>
      <h3>Estoy en el contador</h3>
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
