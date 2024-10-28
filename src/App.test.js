import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza correctamente el botón y el texto inicial', () => {
  render(<App />);
  const textoInicial = screen.getByText("Hacer clic aquí");
  expect(textoInicial).toBeInTheDocument();
});
