console.log(this); // é window

let exibeConteudo = () => {
  console.log(this);
  alert(this.textContent);
};

const $ = document.querySelector.bind(document);

$('h1').addEventListener('click', exibeConteudo);

$('p').addEventListener('click', exibeConteudo);

$('div').addEventListener('click', exibeConteudo);
