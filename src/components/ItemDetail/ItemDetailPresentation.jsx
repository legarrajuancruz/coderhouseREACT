import estilo from ".//ItemDetail.module.css";

export const ItemDetailPresentation = ({ product }) => {
  return (
    <div className={estilo.ubicacion}>
      <h1> {product.title} </h1>
      <div>
        <img width="450px" src={product.img} />
      </div>
      <h4> {product.description}</h4>
      <h2> ${product.price} </h2>
      <h3>Stock {product.stock} Unidades</h3>
    </div>
  );
};
