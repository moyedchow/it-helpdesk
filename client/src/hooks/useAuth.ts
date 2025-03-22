import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const useAuth = () => {
    const { user, login, logout, register } = useContext(AuthContext);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        setIsAuthenticated(!!user);
    }, [user]);

    return {
        isAuthenticated,
        user,
        login,
        logout,
        register,
    };
};

export default useAuth;