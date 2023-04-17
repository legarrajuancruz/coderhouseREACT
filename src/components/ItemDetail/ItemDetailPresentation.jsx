export const ItemDetailPresentation = ({ product }) => {
  return (
    <div>
      <h3> {product.title} </h3>
      <h2> {product.price} </h2>
    </div>
  );
};
