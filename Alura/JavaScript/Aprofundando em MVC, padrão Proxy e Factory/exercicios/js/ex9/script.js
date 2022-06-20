const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('PROMISE RESOLVIDA'), 5000);
});

promise.then(resultado => console.log(resultado));
