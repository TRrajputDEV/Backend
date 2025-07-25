// components/layout/UserProfile.jsx
import React from 'react';
import { User } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

const UserProfile = ({ onChangePasswordClick }) => {
    const { user } = useAuth();
    console.log(user);
    if(!user){
        return (
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 flex items-center justify-center min-h-[200px]">
            <div className="text-center">
                <User className="w-12 h-12 mx-auto text-blue-400 mb-4" />
                <p className="text-gray-700 text-lg">No user information available.</p>
            </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Welcome back, {user?.fullname}!</h2>
                    <p className="text-gray-600">@{user?.username}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Account Information</h3>
                    <div className="space-y-2 text-sm">
                        <p><span className="font-medium">Full Name:</span> {user?.fullname}</p>
                        <p><span className="font-medium">Username:</span> {user?.username}</p>
                        <p><span className="font-medium">Email:</span> {user?.email}</p>
                    </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Quick Actions</h3>
                    <div className="space-y-2">
                        <button
                            onClick={onChangePasswordClick}
                            className="block w-full text-left px-3 py-2 text-blue-700 hover:bg-blue-100 rounded transition-colors"
                        >
                            Change Password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;