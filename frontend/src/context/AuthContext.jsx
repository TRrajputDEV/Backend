import React, { createContext, useState } from "react";
import { apiService } from '../services/apiService';

// Create the context
const AuthContext = createContext(null);

// AuthProvider component
const AuthProvider = ({ children }) => {

    // setting  up the state.
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // check the authentication - if user is loggedIN. ?

    const checkAuth = async () => {
        try {
            setLoading(false);
            const response = await apiService.getCurrentUser();
            setUser(response.data);
            setError(null); // clear old errors
        } catch (err) {
            setUser(null);
            setError(err.message || "Failed to authenticate.");
        } finally {
            setLoading(false);
        }
    };

    // User - login 
    const login = async (credentials) => {
        try {
            setError(null);
            const response = await apiService.login(credentials);
            setUser(response.data);
            return { success: true };
        } catch (error) {
            setError(error.message);
            return {
                success: false,
                error: error.message
            }
        }
    };

    // User - register
    const register = async (userData) => {
        try {
            setError(null);
            const response = await apiService.register(userData);
            setUser(response.data);
            return { success: true };
        } catch (error) {
            setError(error.message);
            return {
                success: false,
                error: error.message
            }
        }
    }

    // User - logout

    const logout = async () => {
        try {
            setError(null);
            await apiService.logout();
            setUser(null);
            return {
                success: true
            }
        } catch (error) {
            setError(error.message);
            return {
                success: false,
                error: error.message
            }
        }
    }

    const changePassword = async passwordData => {
        try {
            setError(null);
            await apiService.changePassword(passwordData);
            return { success: true };
        } catch (error) {
            setError(error.message);
            return { success: false, error: error.message };
        }
    };

    return (
        <AuthContext.Provider
            value={{ user, loading, error, login, register, logout, changePassword, checkAuth }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// Export both context and provider
export { AuthContext, AuthProvider };
