import { useState, useEffect } from "react";
import { ItemListPresentation } from "./ItemListPresentation";
import { products } from "../ProductsMock";
import useCounter from "../../utils/hooks/useCounter";
import { Button } from "@mui/material";
import style from "./ItemList.module.css";

export const ItemListContainer = () => {
  const { counter, incrementar, decrementar, resetear } = useCounter(0);

  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div>
        <ItemListPresentation items={items} />
      </div>
      <h1>{counter}</h1>
      <div className={style.ordenBotones}>
        <Button variant="contained" onClick={incrementar}>
          SUMAR
        </Button>
        <Button variant="contained" onClick={decrementar}>
          RESTAR
        </Button>
        <Button variant="contained" onClick={resetear}>
          RESETEAR
        </Button>
      </div>
    </div>
  );
};
