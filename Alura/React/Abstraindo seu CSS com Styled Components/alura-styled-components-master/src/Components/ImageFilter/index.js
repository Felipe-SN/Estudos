import React from 'react';
import { Icon } from '../UI';
import alimentacao from '../../assets/images/alimentacao.svg';
import outros from '../../assets/images/outros.svg';
import saude from '../../assets/images/saude.svg';
import transporte from '../../assets/images/transporte.svg';
import utilidades from '../../assets/images/utilidades.svg';

const ImageFilter = (type) => {
  const images = {
    Restaurante: <Icon src={alimentacao} alt="Restaurante" />,
    Utilidades: <Icon src={utilidades} alt="Utilidades" />,
    Saude: <Icon src={saude} alt="Saúde" />,
    Transporte: <Icon src={transporte} alt="Transporte" />,
    Default: <Icon src={outros} alt="Outros" />,
  };

  return images[type] || images.Default;
};

export default ImageFilter;
