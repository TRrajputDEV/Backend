// components/layout/Header.jsx
import React from 'react';
import { Home, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

const Header = ({ onSettingsClick }) => {
    const { logout } = useAuth();

    const handleLogout = async () => {
        await logout();
    };

    return (
        <header className="bg-white shadow-sm border-b">
            <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <Home className="w-8 h-8 text-blue-600" />
                    <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={onSettingsClick}
                        className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        <Settings className="w-5 h-5" />
                        <span>Settings</span>
                    </button>
                    <button
                        onClick={handleLogout}
                        className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                        <LogOut className="w-5 h-5" />
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;