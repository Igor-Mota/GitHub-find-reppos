import React, { useState, createContext, useContext } from 'react';

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [userRepos, setUserRepos] = useState('twixtaxe');

  return (
    <UserContext.Provider
      value={{
        userRepos,
        setUserRepos,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export function useUserRepos() {
  const context = useContext(UserContext);
  const { userRepos, setUserRepos } = context;
  return { userRepos, setUserRepos };
}
