export default interface IObjetoItem {
  carrinho?: boolean;
  categoria: string;
  descricao: string;
  favorito: boolean;
  foto: string;
  id: string;
  preco: number;
  quantidade?: number;
  titulo: string;
}
