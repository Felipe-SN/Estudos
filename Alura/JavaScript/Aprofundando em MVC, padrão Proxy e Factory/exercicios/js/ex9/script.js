let ok = true;

const promise = new Promise((resolve, reject) => {
  console.log(resolve);
  setTimeout(() => {
    if (ok) {
      resolve('PROMISE CONCLUÍDA');
      return;
    }

    reject('HOUVE PROBLEMAS');
  }, 5000);
});

promise
  .then(resultado => console.log(resultado))
  .catch(erro => console.log(erro));
console.log('FIM');
