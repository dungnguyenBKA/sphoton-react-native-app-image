import React, { useContext, useState } from 'react';

interface User {
  username: string,
}

interface AuthContextApi {
  user: User | undefined,
  setUser: (user: User | undefined) => void
}

const defaultAuthValue: AuthContextApi = {
  setUser: (user: User | undefined) => {
    // do nothing
  },
  user: undefined,
};

const UserAuthContext = React.createContext<AuthContextApi>(defaultAuthValue);

export const UserAuthenticate: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>();

  const contextValue: AuthContextApi = {
    setUser: (user: User | undefined) => {
      setUser(user);
    },
    user: user,
  };

  return <UserAuthContext.Provider value={contextValue}>
    {children}
  </UserAuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(UserAuthContext);
};
