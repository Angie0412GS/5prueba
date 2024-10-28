import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Boton from '../componentes/Boton.js';

test('verifica que el texto cambia al hacer clic en el botón', () => {
  const { getByText } = render(<Boton />);

  const textoInicial = getByText("Hacer clic aquí");
  expect(textoInicial).toBeInTheDocument();

  const boton = getByText("Clic aquí");
  fireEvent.click(boton);

  const textoActualizado = getByText("¡Gracias por hacer clic!");
  expect(textoActualizado).toBeInTheDocument();
});
