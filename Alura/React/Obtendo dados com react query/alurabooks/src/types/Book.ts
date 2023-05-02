export type Book = typeof book;

const book = {
  id: 1,
  categoria: 3,
  titulo: 'Acessibilidade na Web',
  slug: 'acessibilidade-na-web',
  descricao: 'Boas práticas para construir sites e aplicações acessíveis',
  isbn: '978-65-86110-10-4',
  numeroPaginas: 246,
  publicacao: '2020-04-01',
  imagemCapa:
    'https://raw.githubusercontent.com/viniciosneves/alurabooks/curso-novo/public/imagens/livros/acessibilidade.png',
  autor: 1,
  opcoesCompra: [
    {
      id: 1,
      titulo: 'E-book',
      preco: 29.9,
      formatos: ['.pdf', '.pub', '.mob'],
    },
    {
      id: 2,
      titulo: 'Impresso',
      preco: 39.9,
    },
    {
      id: 3,
      titulo: 'E-book + Impresso',
      preco: 59.9,
      formatos: ['.pdf', '.pub', '.mob'],
    },
  ],
  sobre:
    'Acessibilidade na Web consiste na eliminação de barreiras de acesso em páginas e aplicações digitais para que pessoas com deficiência tenham autonomia na rede. Na verdade, acessibilidade na web beneficia todas as pessoas. Em algum momento da vida todos podem precisar de acessibilidade, seja devido a uma limitação temporária ou permanente. Quando não levamos em consideração o acesso de pessoas com deficiência, estamos tirando o direito de uma pessoa de navegar, interagir ou consumir produtos e serviços na rede. Empatia é o fator principal para que as aplicações que desenvolvemos sejam inclusivas.',
};
