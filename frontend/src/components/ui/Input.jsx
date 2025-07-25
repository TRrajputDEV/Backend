const { useState } = require("react")

const Input = ({
    icon: Icon,
    type = 'text',
    placeholder,
    value,
    onChange,
    required = false
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputType = type === 'password' && showPassword ? 'text' : type;

    return (
        <div className="relative">
            {Icon && (
                <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            )}
            <input
                type={inputType}
                placeholder={placeholder}
                onChange={onchange}
                value={value}
                required={required}
                className={`w-full ${Icon ? 'pl-10' : 'pl-4'} ${type === 'password' ? 'pr-10' : 'pr-4'} py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
            />
            {type === 'password' && (
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
            )}
        </div>
    );
};

export default Input;