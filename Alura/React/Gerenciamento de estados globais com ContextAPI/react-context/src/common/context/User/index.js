import { createContext, useContext, useState } from 'react';

export const UserContext = createContext({});
UserContext.displayName = 'Usuário';

export const UserProvider = ({ children }) => {
  const [nome, setNome] = useState('');
  const [saldo, setSaldo] = useState(0);

  return (
    <UserContext.Provider value={{ nome, setNome, saldo, setSaldo }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const { nome, setNome, saldo, setSaldo } = useContext(UserContext);

  return { nome, setNome, saldo, setSaldo };
};
