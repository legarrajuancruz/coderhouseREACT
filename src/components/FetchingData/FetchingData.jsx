import React, { useState, useEffect } from "react";

const FetchingData = () => {
  const [data, setData] = useState([]);
  const [byId, setById] = useState({});

  useEffect(() => {
    const obtenerPost = fetch("https://jsonplaceholder.typicode.com/posts");
    obtenerPost.then((res) => res.json()).then((res) => setData(res));

    const PostById = fetch("https://jsonplaceholder.typicode.com/posts/2");
    PostById.then((res) => res.json()).then((res) => setById(res));
  }, []);

  console.log(data);
  console.log(byId);

  const crearNuevoPost = () => {
    const nuevoPost = fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        userId: 9,
        title: "Configurando nuevo POST",
        body: "Es una descripcion al cuerpo del nuevo post",
      }),
    });
    nuevoPost.then((res) => res.json()).then((res) => console.log(res));
  };

  const modUser = () => {
    const nuevoPost = fetch("https://jsonplaceholder.typicode.com/posts/2", {
      method: "PATCH",
      body: JSON.stringify({
        title: "Usuario modificado",
      }),
    });
    nuevoPost.then((res) => res.json()).then((res) => console.log(res));
  };

  return (
    <div>
      <h1>Fetching de datos en consola</h1>;
      <button onClick={crearNuevoPost}>Crear POST</button>
      <button onClick={modUser}>modificar Usuario</button>
    </div>
  );
};

export default FetchingData;
