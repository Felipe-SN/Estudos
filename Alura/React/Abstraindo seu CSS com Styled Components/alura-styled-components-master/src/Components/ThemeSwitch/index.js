import React from 'react';
import ThemeOn from '../../assets/images/themeOn.svg';
import ThemeOff from '../../assets/images/themeOff.svg';
import { Icon } from '../UI';

const claro = <Icon src={ThemeOn} alt="Tema Claro" />;
const escuro = <Icon src={ThemeOff} alt="Tema escuro" />;

const ThemeSwitch = ({ theme }) => (theme ? escuro : claro);

export default ThemeSwitch;
