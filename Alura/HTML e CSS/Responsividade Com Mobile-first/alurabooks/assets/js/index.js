import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

const btnMenu = document.querySelector('.cabecalho__menu-hamburger');
const btnCategorias = document.querySelector('[data-btn-categoria]');
const menu = document.querySelector('.cabecalho__lista-menu');
const swapVersion = {
  true: () =>
    ativaElementoDeClique(btnMenu, 'cabecalho__menu-hamburger--ativo'),
  false: () =>
    ativaElementoDeClique(btnCategorias, 'cabecalho__menu-hamburger--ativo'),
};

let larguraTela = window.innerWidth;
let mobileVersion = (larguraTela < 1024).toString();

const ativaElementoDeClique = (elementoAtivo, classeAtiva) => {
  const controlador = new AbortController();
  if (elementoAtivo) {
    elementoAtivo.addEventListener(
      'click',
      () => {
        menu.classList.toggle('cabecalho__lista-menu--ativo');
        elementoAtivo.classList.toggle(classeAtiva);
      },
      {
        signal: controlador.signal,
      }
    );
  }
  return controlador;
};

let elementoAtual = swapVersion[mobileVersion]();

window.onresize = () => {
  larguraTela = window.innerWidth;
  mobileVersion = (larguraTela < 1024).toString();
  elementoAtual.abort();
  if (menu.classList.contains('cabecalho__lista-menu--ativo')) {
    menu.classList.remove('cabecalho__lista-menu--ativo');
    btnMenu.classList.remove('cabecalho__menu-hamburger--ativo');
    btnCategorias.classList.remove('cabecalho__menu-hamburger--ativo');
  }

  if (!mobileVersion) {
    elementoAtual = swapVersion[mobileVersion]();
    return;
  }
  elementoAtual = swapVersion[mobileVersion]();
  return;
};

const swiper = new Swiper('.swiper', {
  centeredSlides: true,
  centeredSlidesBounds: true,
  pagination: { el: '.swiper-pagination', type: 'bullets' },
  slidesPerView: 'auto',
  spaceBetween: 20,
  breakpoints: {
    1024: {
      spaceBetween: 0,
    },
  },
});
