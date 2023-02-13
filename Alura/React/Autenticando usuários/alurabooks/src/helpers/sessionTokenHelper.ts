type getOptions = {
  tokenVerify?: boolean;
};

const sessionTokenHelper = () => {
  const token = {
    set: (token: string) => sessionStorage.setItem('token', token),

    get: (getOptions?: getOptions) => {
      const accessToken = sessionStorage.getItem('token');
      if (getOptions?.tokenVerify && !accessToken) {
        throw new Error(
          'Token não encontrado, certifique-se que um token de acesso foi fornecido e armazenado'
        );
      }
      return accessToken;
    },

    remove: () => {
      sessionStorage.removeItem('token');
      if (sessionStorage.getItem('token') !== null)
        throw new Error('Não foi possível a remoção do token de acesso');
      return;
    },
  };

  return { token };
};

export default sessionTokenHelper;
