const $ = document.querySelector.bind(document);

const tags = {
  h1: document.createElement('h1'),
  p: document.createElement('p'),
  div: document.createElement('div'),
};

tags.h1.textContent = 'TITULO';
tags.p.textContent = 'PARAGRAFO';
tags.div.textContent = 'DADOS';

document.body.appendChild(tags.h1);
document.body.appendChild(tags.p);
document.body.appendChild(tags.div);

console.log(this); // é window

let exibeConteudo = function () {
  console.log(this);
  alert(this.textContent);
};

tags.h1.addEventListener('click', exibeConteudo);

tags.p.addEventListener('click', exibeConteudo);

tags.div.addEventListener('click', exibeConteudo);
