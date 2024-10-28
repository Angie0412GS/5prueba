import React, { useState } from 'react';
import Styles from '../Styles/Boton.module.css';

const Boton = () => {
  const [texto, setTexto] = useState("Hacer clic aquí");

  const manejarClic = () => {
    setTexto("¡Gracias por hacer clic!");
  };

  return (
    <div className={Styles.container}>
      <p className={Styles.texto}>{texto}</p> {/* Texto separado del botón */}
      <button className={Styles.boton} onClick={manejarClic}>Clic aquí</button> {/* Botón independiente */}
    </div>
  );
};

export default Boton;
