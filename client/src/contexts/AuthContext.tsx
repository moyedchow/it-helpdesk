import React, { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const history = useHistory();

  const login = (token: string) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
    history.push('/dashboard'); // Redirect to dashboard after login
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    history.push('/login'); // Redirect to login after logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};