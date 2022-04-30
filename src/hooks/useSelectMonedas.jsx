import { useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`;

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
`;

// mis propios hooks

const useSelectMonedas = (label, opciones) => {
  // añadir useState para impcorpar ente este hooks
  const [state, setState] = useState('');

  // crea una funcion
  // vamos returno de react para imprimir en la pantalla
  // pasamos como label cuando pases un valor inicial
  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
      {/* imprimir el label que le pase */}
      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <option value=''>Seleccione</option>
        {/* vamos a iteronar c/u las opciones */}
        {opciones.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </>
  );

  // retornamos un arreglo para que sea hooks
  return [state, SelectMonedas];
};

export default useSelectMonedas;
