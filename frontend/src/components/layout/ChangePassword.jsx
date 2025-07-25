// components/layout/ChangePassword.jsx
import React, { useState } from 'react';
import { Lock } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import Input from '../ui/Input';
import Button from '../ui/Button';

const ChangePassword = ({ onClose, onSuccess, onError }) => {
    const [passwordData, setPasswordData] = useState({
        oldPassword: '',
        newPassword: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const { changePassword } = useAuth();

    const handleChangePassword = async () => {
        setIsLoading(true);

        const result = await changePassword(passwordData);
        setIsLoading(false);

        if (result.success) {
            setPasswordData({ oldPassword: '', newPassword: '' });
            onSuccess('Password changed successfully!');
            onClose();
        } else {
            onError(result.error);
        }
    };

    const handlePasswordChange = (field) => (e) => {
        setPasswordData(prev => ({ ...prev, [field]: e.target.value }));
    };

    return (
        <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Change Password</h3>
                <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600 text-xl"
                >
                    ✕
                </button>
            </div>

            <div className="space-y-4 max-w-md">
                <Input
                    icon={Lock}
                    type="password"
                    placeholder="Current Password"
                    value={passwordData.oldPassword}
                    onChange={handlePasswordChange('oldPassword')}
                    required
                />
                <Input
                    icon={Lock}
                    type="password"
                    placeholder="New Password"
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange('newPassword')}
                    required
                />
                <div className="flex space-x-4">
                    <Button
                        type="button"
                        onClick={handleChangePassword}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Updating...' : 'Update Password'}
                    </Button>
                    <Button
                        type="button"
                        variant="secondary"
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;