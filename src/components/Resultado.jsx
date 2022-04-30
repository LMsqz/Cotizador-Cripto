import styled from '@emotion/styled';

const Resultad = styled.div`
  color: #fff;
  font-family: 'Lato', sans-serif;

  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;

const Imagen = styled.img`
  display: block;
  width: 120px;
`;

const Texto = styled.p`
  font-size: 15px;
  span {
    font-weight: 500;
  }
`;
const Precio = styled.p`
  font-size: 20px;
  span {
    font-weight: 500;
  }
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGPCT24HOUR, IMAGEURL, LASTUPDATED } =
    resultado;
  return (
    <Resultad>
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt='imagen cripto'
      />
      <div>
        <Precio>
          EL PRECIO ES DE: <span>{PRICE}</span>
        </Precio>
        <Texto>
          PRECIO MAS ALTO DEL DIA: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          PRECIO MAS BAJO DEL DIA: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          VARIACION ULTIMO 24 HORA: <span>{CHANGPCT24HOUR}</span>
        </Texto>
        <Texto>
          ULTIMOS ACTUALIZACIONES: <span>{LASTUPDATED}</span>
        </Texto>
      </div>
    </Resultad>
  );
};

export default Resultado;
