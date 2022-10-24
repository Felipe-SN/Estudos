const btnMenu = document.querySelector('.cabecalho__menu-hamburger');
const menu = document.querySelector('.cabecalho__lista-menu');

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('cabecalho__lista-menu--ativo');
  btnMenu.classList.toggle('cabecalho__menu-hamburger--ativo');
});
