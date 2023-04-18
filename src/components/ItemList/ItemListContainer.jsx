import { useState, useEffect } from "react";
import { ItemListPresentation } from "./ItemListPresentation";
import axios from "axios";
import { Button } from "@mui/material";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [cambios, setCambios] = useState(false);

  useEffect(() => {
    setCambios(false);
    let data = axios.get("http://localhost:5000/products");
    data.then((res) => setItems(res.data));
  }, [cambios]);

  const borrarItem = (id) => {
    axios.delete(`http://localhost:5000/products/${id}`);
    setCambios(true);
  };

  const editarItem = (id, modificaciones) => {
    axios.patch(`http://localhost:5000/products/${id}`, modificaciones);
    setCambios(true);
  };

  const crearItem = (data) => {
    axios.post("http://localhost:5000/products", data);
    setCambios(true);
  };

  return (
    <div>
      <div>
        <ItemListPresentation
          items={items}
          borrarItem={borrarItem}
          editarItem={editarItem}
        />
        <Button
          variant="contained"
          size="small"
          onClick={() =>
            crearItem({
              title: "Nvidia RTX 3090",
              price: 750000,
              stock: 6,
              description: "Placa de video Geforce Nvidia Rtx3090 ",
              category: "Gama alta",
              img: "https://res.cloudinary.com/dl5zwia3m/image/upload/v1681789035/rtx_3090_zzcqcf.png",
            })
          }
        >
          Nuevo Producto
        </Button>
      </div>
    </div>
  );
};
