import axios from 'axios';

export default async function CEPSearch(valueCEP: string) {
  const cepFormatted = valueCEP.replace(/\D/g, '');
  const regExCEP = new RegExp(/^[\d]{5}-?[\d]{3}$/, 'gi');
  if (regExCEP.test(cepFormatted)) {
    const data: CEPProps = await (await axios.get(`https://viacep.com.br/ws/${cepFormatted}/json/`)).data;
    if (data.erro) {
      alert('CEP Invalido');
      return;
    }
    return data;
  }
  alert('Formato de CEP invalido');
  return;
}

type CEPProps = {
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
};
