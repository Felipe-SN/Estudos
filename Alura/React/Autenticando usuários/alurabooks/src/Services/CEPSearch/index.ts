const CEPSearch = async (valueCEP: string) => {
  const regExCEP = /^[0-9]{5}-[0-9]{3}$/;
  if (regExCEP.test(valueCEP)) {
    const searchValue = `https://viacep.com.br/ws/${valueCEP}/json/`;
    const response = await fetch(searchValue);
    console.log(response);
    console.log(response.json());
    if (!response.ok) return 'CEP invalido';
    return response.json();
  }
  return 'Formato de CEP invalido';
};

export default CEPSearch;
