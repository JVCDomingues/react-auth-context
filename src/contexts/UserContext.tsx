import React, { useState, createContext, ReactNode } from "react";
import { User } from "../models/User";

interface UserContextProps {
  user: User;
  addUser: (user: User) => void;
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextProps);

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState({} as User);

  function addUser(user: User) {
    setUser(user);
  }

  return (
    <UserContext.Provider value={{
      user,
      addUser
    }}>
      {children}
    </UserContext.Provider>
  )
}