// components/auth/AuthPages.jsx
import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const AuthPages = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            {isLogin ? (
                <Login onToggleMode={() => setIsLogin(false)} />
            ) : (
                <Register onToggleMode={() => setIsLogin(true)} />
            )}
        </div>
    );
};

export default AuthPages;