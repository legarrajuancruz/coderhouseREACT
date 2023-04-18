import { ItemCard } from "./ItemCard";

export const ItemListPresentation = ({ items, borrarItem, editarItem }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        padding: "25px",
        marginTop: "1vh",
        marginBottom: "1vh",
      }}
    >
      {items.map((items) => {
        return (
          <ItemCard
            items={items}
            key={items.id}
            borrarItem={borrarItem}
            editarItem={editarItem}
          />
        );
      })}
    </div>
  );
};
