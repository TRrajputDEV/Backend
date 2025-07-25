// components/auth/Register.jsx
import React, { useState } from 'react';
import { User, Lock, Mail } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth'; // ✅ corrected path
import Input from '../ui/Input';
import Button from '../ui/Button';

const Register = ({ onToggleMode }) => {
    const [formData, setFormData] = useState({
        fullname: '',
        username: '',
        email: '',
        password: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const { register, error } = useAuth();

    const handleChange = (field) => (e) => {
        setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

    const handleSubmit = async () => {
        setIsLoading(true);

        const result = await register(formData);

        setIsLoading(false);

        if (result.success) {
            // Optional: show toast or redirect, context will update user
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
                <p className="text-gray-600 mt-2">Sign up to get started</p>
            </div>

            {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    {error}
                </div>
            )}

            <div className="space-y-4">
                <Input
                    icon={User}
                    type="text"
                    placeholder="Full Name"
                    value={formData.fullname}
                    onChange={handleChange('fullname')}
                    required
                />
                <Input
                    icon={User}
                    type="text"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange('username')}
                    required
                />
                <Input
                    icon={Mail}
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange('email')}
                    required
                />
                <Input
                    icon={Lock}
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange('password')}
                    required
                />

                <Button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="w-full"
                >
                    {isLoading ? 'Creating account...' : 'Sign Up'}
                </Button>
            </div>

            <div className="mt-6 text-center">
                <p className="text-gray-600">
                    Already have an account?{' '}
                    <button
                        onClick={onToggleMode}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                        Sign in
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Register;
