export const CartPresentation = ({ cart }) => {
  return (
    <div>
      aca el carro
      {cart.map((eL) => (
        <h2>{eL?.name}</h2>
      ))}
    </div>
  );
};
