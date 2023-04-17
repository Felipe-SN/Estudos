type Usuario = {
  id: number;
  nome: string;
  cartoes?: [
    {
      nome: string;
      bandeiraId: number;
      saldo: number;
      usuarioId: number;
      id: string;
      taxa: number;
      bandeira: string;
    }
  ];
};

export default Usuario;
