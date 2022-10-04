let paginaAtual = window.location.pathname.replace(/.*\/|\..*/g, '');
const btnMenu = document.querySelector('.cabecalho__menu');
const menuLateral = document.querySelector('.menu-lateral');
const menuLateralLinks = document.querySelectorAll('.menu-lateral__link');
const pages = {
  index: '0',
  videos: '1',
  picos: '2',
  integrantes: '3',
  camisas: '4',
  pinturas: '5',
};

btnMenu.addEventListener('click', () => {
  menuLateral.classList.toggle('menu-lateral--ativo');
});

if (pages[paginaAtual])
  (() => {
    menuLateralLinks[pages[paginaAtual]].classList.toggle(
      'menu-lateral__link--ativo'
    );
  })();
