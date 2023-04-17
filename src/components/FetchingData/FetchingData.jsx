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

  return <h1>Fetching de datos en consola</h1>;
};

export default FetchingData;
