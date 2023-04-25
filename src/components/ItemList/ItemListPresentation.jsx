import { ItemCard } from "./ItemCard";

export const ItemListPresentation = ({ items }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: "25px",
        marginTop: "1vh",
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
