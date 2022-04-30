import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Error from './Error';
import useSelectMonedas from '../hooks/useSelectMonedas';
import { monedas } from '../data/monedas';

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;
  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Formulario = ({ setMonedas }) => {
  // selector de criptos
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  // llamamos nuestro propios hooks
  // la venta donde puede hacer el segundo select y duplicas la funcion de nuestro propio hooks
  const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas);
  const [criptomoneda, SelectCriptomoneda] = useSelectMonedas(
    'Elige tu Crptomoneda',
    criptos
  );
  // llamenos a SelectMonedas
  // SelectMonedas();
  // su valor inicial useSelectMoneda podria pasar 'elige tu moneda'

  // llamar un APPI  usando useEffect
  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      // vamos hacer un fech asi ese url
      const respuesta = await fetch(url);
      // una respuesta JSON
      const resultado = await respuesta.json();

      // vamos pasar el selector de moneda de cripto map para crear una nuevo arreglo forich solo nos alista
      const arrayCriptos = resultado.Data.map((cripto) => {
        // crear un nuevo objeto para crear como las id y nombres iterando cado uno de ello
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };
        /*  console.log(cripto.CoinInfo.Name);
        console.log(cripto.CoinInfo.FullName); */
        return objeto;
      });
      setCriptos(arrayCriptos);
    };
    consultarAPI();
  }, []);
  // este es cuando consulte una ves no mas

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([moneda, criptomoneda].includes('')) {
      setError(true);

      return;
    }

    setError(false);
    setMonedas({
      moneda,
      criptomoneda,
    });
  };

  return (
    <>
      {error && <Error>Todos los campos son obligatorio</Error>}
      {/* validar el formularo {handleSubmit} */}
      <form onSubmit={handleSubmit}>
        {/* aqui va el sintacis de SelectMonedas */}
        <SelectMonedas />
        <SelectCriptomoneda />
        <InputSubmit type='submit' value='Cotizar' />
      </form>
    </>
  );
};

export default Formulario;
