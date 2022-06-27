import React from 'react';

export interface ICredentials {
  id: string;
  isAdmin: boolean;
}

export interface IUser {
  email: string;
  password: string;
}

interface AuthContextType {
  credentials: ICredentials;
  signin: (user: IUser, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

const AuthContext = React.createContext<AuthContextType>(null!);

export default AuthContext;
