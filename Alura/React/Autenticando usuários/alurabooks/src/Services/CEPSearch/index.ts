import axios from 'axios';

export interface ResponseProps {
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
  erro?: boolean;
}

const CEPSearch = async (valueCEP: string) => {
  const cepFormatted = valueCEP.replace(/\D/g, '');
  const regExCEP = new RegExp(/^[\d]{5}-?[\d]{3}$/, 'gi');
  const searchValue = `https://viacep.com.br/ws/${cepFormatted}/json/`;
  if (regExCEP.test(cepFormatted)) {
    const data: ResponseProps = await (await axios.get(searchValue)).data;
    if (data.erro) {
      alert('CEP Invalido');
      return;
    }
    return data;
  }
  alert('Formato de CEP invalido');
  return;
};

export default CEPSearch;
