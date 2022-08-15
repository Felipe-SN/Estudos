import React, { PropsWithChildren } from 'react';
import './styles.css';

const Card: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="card">{children}</div>;
};

export default Card;
