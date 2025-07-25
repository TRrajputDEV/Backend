// components/auth/Login.jsx
import React, { useState } from 'react';
import { Lock, Mail } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import Input from '../ui/Input';
import Button from '../ui/Button';

const Login = ({ onToggleMode }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const { login, error } = useAuth(); // from custom hook

    const handleSubmit = async () => {
        setIsLoading(true);

        const result = await login(formData);

        setIsLoading(false);

        if (result.success) {
            // Redirect or show toast, etc. (Handled at app-level maybe)
        }
    };

    const handleChange = (field) => (e) => {
        setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
                <p className="text-gray-600 mt-2">Sign in to your account</p>
            </div>

            {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    {error}
                </div>
            )}

            <div className="space-y-4">
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
                    {isLoading ? 'Signing in...' : 'Sign In'}
                </Button>
            </div>

            <div className="mt-6 text-center">
                <p className="text-gray-600">
                    Don't have an account?{' '}
                    <button
                        onClick={onToggleMode}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                        Sign up
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login;
