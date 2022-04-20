import React from 'react';
import style from './Botao.module.scss';

type child = { children: string };

class Botao extends React.Component<child> {
  render() {
    console.log(this.props);

    return <button className={style.botao}>{this.props.children}</button>;
  }
}

export default Botao;
