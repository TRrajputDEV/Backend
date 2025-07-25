// components/layout/Dashboard.jsx
import React, { useState } from 'react';
import Header from './Header';
import UserProfile from './UserProfile';
import ChangePassword from './ChangePassword';

const Dashboard = () => {
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [message, setMessage] = useState(null);

    const handleShowChangePassword = () => {
        setShowChangePassword(true);
        setMessage(null);
    };

    const handleCloseChangePassword = () => {
        setShowChangePassword(false);
    };

    const handlePasswordChangeSuccess = (successMessage) => {
        setMessage({ type: 'success', text: successMessage });
    };

    const handlePasswordChangeError = (errorMessage) => {
        setMessage({ type: 'error', text: errorMessage });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header onSettingsClick={handleShowChangePassword} />

            <main className="max-w-4xl mx-auto px-4 py-8">
                <UserProfile onChangePasswordClick={handleShowChangePassword} />

                {/* Messages */}
                {message && (
                    <div className={`mb-6 p-4 rounded-lg ${message.type === 'success'
                            ? 'bg-green-100 border border-green-400 text-green-700'
                            : 'bg-red-100 border border-red-400 text-red-700'
                        }`}>
                        {message.text}
                    </div>
                )}

                {/* Change Password Form */}
                {showChangePassword && (
                    <ChangePassword
                        onClose={handleCloseChangePassword}
                        onSuccess={handlePasswordChangeSuccess}
                        onError={handlePasswordChangeError}
                    />
                )}
            </main>
        </div>
    );
};

export default Dashboard;