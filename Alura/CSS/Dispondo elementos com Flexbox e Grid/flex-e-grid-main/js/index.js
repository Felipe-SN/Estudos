const btnMenu = document.querySelector('.cabecalho__menu');
const menuLateral = document.querySelector('.menu-lateral');
const menuLateralLinks = document.querySelectorAll('.menu-lateral__link');

btnMenu.addEventListener('click', () => {
  menuLateral.classList.toggle('menu-lateral--ativo');
});

menuLateralLinks.forEach(link => {
  link.addEventListener('click', () => {
    link.classList.add('menu-lateral__link--ativo');
  });
  link.addEventListener('blur', () =>
    link.classList.remove('menu-lateral__link--ativo')
  );
});
