const sessionTokenManagement = () => {
  const set = (token: string) => sessionStorage.setItem('token', token);

  const get = () => {
    const access_token = sessionStorage.getItem('token');
    if (access_token) return access_token;
    throw new Error(
      'Token não encontrado, certifique-se que um token de acesso foi fornecido e armazenado'
    );
  };

  const remove = () => {
    sessionStorage.removeItem('token');
    if (!sessionStorage.getItem('token')) return;
    throw new Error('Não foi possível a remoção do token de acesso');
  };

  return { set, get, remove };
};

export default sessionTokenManagement;
