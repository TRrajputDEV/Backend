// context/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import apiService from '../services/apiService';

// Create the context
export const AuthContext = createContext(null);

// AuthProvider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    // Check if user is authenticated on app load
    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const response = await apiService.getCurrentUser();
            setUser(response.data);
        } catch (error) {
            setUser(null);
        }

    };

    const login = async (credentials) => {
        try {
            setError(null);
            const response = await apiService.login(credentials);

            const { user, AccessToken, RefreshToken } = response.data;

            // Optional: Save tokens if you're not already
            localStorage.setItem('accessToken', AccessToken);
            localStorage.setItem('refreshToken', RefreshToken);

            setUser(user); // ✅ this fixes the dashboard state update

            return { success: true, user };
        } catch (error) {
            setError(error.message);
            return { success: false, error: error.message };
        }
    };


    const register = async (userData) => {
        try {
            setError(null);
            const response = await apiService.register(userData);
            setUser(response.data);
            return { success: true };
        } catch (error) {
            setError(error.message);
            return { success: false, error: error.message };
        }
    };

    const logout = async () => {
        try {
            await apiService.logout();
            setUser(null);
            return { success: true };
        } catch (error) {
            setError(error.message);
            return { success: false, error: error.message };
        }
    };

    const changePassword = async (passwordData) => {
        try {
            setError(null);
            await apiService.changePassword(passwordData);
            return { success: true };
        } catch (error) {
            setError(error.message);
            return { success: false, error: error.message };
        }
    };

    // Context value
    const value = {
        user,
        error,
        login,
        register,
        logout,
        changePassword,
        checkAuth,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};