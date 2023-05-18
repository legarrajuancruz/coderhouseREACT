import { ItemCard } from "./ItemCard";

export const ItemListPresentation = ({ items }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        marginBottom: "25px",
        gap: "50px",
      }}
    >
      {items.map((items) => {
        return <ItemCard items={items} key={items.id} />;
      })}
    </div>
  );
};
