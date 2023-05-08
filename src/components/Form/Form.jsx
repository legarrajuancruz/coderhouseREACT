import React, { useState } from "react";

export const Form = () => {
  const [data, setData] = useState({
    nombre: "",
    apellido: "",
  });

  const cambiosInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const enviarFormulario = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <h1> Armando un formulario </h1>
      <form onSubmit={enviarFormulario}>
        <input
          type="text"
          placeholder="nombre"
          value={data.nombre}
          name="nombre"
          onChange={cambiosInput}
        />
        <input
          type="text"
          placeholder="apellido"
          value={data.apellido}
          name="apellido"
          onChange={cambiosInput}
        />
        <button type="submit">Enviar</button>
      </form>
      ;
    </div>
  );
};
