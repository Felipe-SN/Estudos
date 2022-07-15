import React from 'react';
import { IconTheme } from '../UI';
import alimentacao from '../../assets/images/alimentacao.svg';
import outros from '../../assets/images/outros.svg';
import saude from '../../assets/images/saude.svg';
import transporte from '../../assets/images/transporte.svg';
import utilidades from '../../assets/images/utilidades.svg';

const ImageFilter = (type) => {
  const images = {
    Restaurante: <IconTheme src={alimentacao} alt="Restaurante" />,
    Utilidades: <IconTheme src={utilidades} alt="Utilidades" />,
    Saude: <IconTheme src={saude} alt="Saúde" />,
    Transporte: <IconTheme src={transporte} alt="Transporte" />,
    Default: <IconTheme src={outros} alt="Outros" />,
  };

  return images[type] || images.Default;
};

export default ImageFilter;
