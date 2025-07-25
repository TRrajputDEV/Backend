# 🔐 Full Stack Authentication System

A complete, production-ready authentication system built with **React** (frontend) and **Node.js/Express** (backend), featuring JWT-based authentication, secure password management, and a responsive dashboard.

## 🌟 Features

### 🔒 **Authentication & Security**
- **JWT Authentication** with Access & Refresh Tokens
- **Secure Password Hashing** using bcrypt
- **HTTP-Only Cookies** for token storage
- **Protected Routes** with middleware authentication
- **Password Change** functionality
- **Auto-logout** on token expiration
- **CORS Protection** and security headers

### 🎨 **Frontend Features**
- **Responsive Design** with Tailwind CSS
- **Context API** for global state management
- **Protected Dashboard** with user profile
- **Form Validation** and error handling
- **Loading States** and user feedback
- **Modern UI Components** with Lucide React icons
- **Mobile-First** responsive design

### 🚀 **Backend Features**
- **RESTful API** design
- **MongoDB Integration** with Mongoose
- **Middleware Architecture** for authentication
- **Error Handling** with custom error classes
- **Environment Configuration**
- **Cookie Management** for secure sessions
- **User Model** with validation

## 🛠️ Tech Stack

### **Frontend**
- ⚛️ **React 18** - Modern React with hooks
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🏗️ **Vite** - Lightning-fast build tool
- 🔗 **React Router** - Client-side routing
- 🎯 **Context API** - State management
- 🎪 **Lucide React** - Beautiful icons

### **Backend**
- 🟢 **Node.js** - JavaScript runtime
- 🚂 **Express.js** - Web application framework
- 🍃 **MongoDB** - NoSQL database
- 🏷️ **Mongoose** - MongoDB object modeling
- 🔐 **JWT** - JSON Web Tokens
- 🔒 **bcrypt** - Password hashing
- 🍪 **Cookie Parser** - Cookie middleware

## 📁 Project Structure

```
📁 Full Stack Auth System
├── 📁 frontend/
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   │   ├── 📁 auth/          # Authentication components
│   │   │   │   ├── AuthPages.jsx
│   │   │   │   ├── Login.jsx
│   │   │   │   └── Register.jsx
│   │   │   ├── 📁 layout/        # Dashboard & Layout components
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── UserProfile.jsx
│   │   │   │   └── ChangePassword.jsx
│   │   │   └── 📁 ui/            # Reusable UI components
│   │   │       ├── Button.jsx
│   │   │       ├── Input.jsx
│   │   │       └── Loading.jsx
│   │   ├── 📁 context/           # React Context
│   │   │   └── AuthContext.jsx
│   │   ├── 📁 hooks/             # Custom React hooks
│   │   │   └── useAuth.js
│   │   ├── 📁 services/          # API services
│   │   │   └── apiService.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── 📁 backend/
    ├── 📁 src/
    │   ├── 📁 controllers/       # Route controllers
    │   │   └── user.controller.js
    │   ├── 📁 middlewares/       # Custom middleware
    │   │   └── auth.middleware.js
    │   ├── 📁 models/            # Database models
    │   │   └── user.model.js
    │   ├── 📁 routes/            # API routes
    │   │   └── user.routes.js
    │   ├── 📁 utils/             # Utility functions
    │   │   ├── ApiError.js
    │   │   ├── ApiResponse.js
    │   │   └── asyncHandler.js
    │   ├── 📁 db/                # Database configuration
    │   │   └── index.js
    │   ├── app.js                # Express app setup
    │   └── index.js              # Server entry point
    ├── package.json
    └── .env
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher)
- **MongoDB** (local or cloud)
- **Git**

### 1. Clone the Repository
```bash
git clone https://github.com/TRrajputDEV/Full-Stack-Authentication-System.git
cd Full-Stack-Authentication-System
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Configure your environment variables
# Edit .env file with your settings
```

**Environment Variables (.env):**
```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/auth-system
JWT_ACCESS_SECRET=your-super-secret-access-token
JWT_REFRESH_SECRET=your-super-secret-refresh-token
JWT_ACCESS_EXPIRY=1d
JWT_REFRESH_EXPIRY=7d
NODE_ENV=development
```

```bash
# Start the backend server
npm run dev
```
Backend will run on `http://localhost:4000`

### 3. Frontend Setup
```bash
# Navigate to frontend directory (in a new terminal)
cd frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Configure your environment variables
# Edit .env file with backend URL
```

**Environment Variables (.env):**
```env
VITE_API_BASE_URL=http://localhost:4000/api/v1
```

```bash
# Start the frontend development server
npm run dev
```
Frontend will run on `http://localhost:5173`

## 📚 API Documentation

### 🔐 Authentication Endpoints

#### Register User
```http
POST /api/v1/users/register
Content-Type: application/json

{
  "fullname": "John Doe",
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

#### Login User
```http
POST /api/v1/users/login
Content-Type: application/json

{
  "email": "john@example.com", // or username
  "password": "securePassword123"
}
```

#### Logout User
```http
POST /api/v1/users/logout
Authorization: Bearer <access_token>
```

#### Get Current User
```http
GET /api/v1/users/getCurrentUser
Authorization: Bearer <access_token>
```

#### Change Password
```http
POST /api/v1/users/change-password
Authorization: Bearer <access_token>
Content-Type: application/json

{
  "oldPassword": "currentPassword",
  "newPassword": "newSecurePassword123"
}
```

### 📝 Response Format
All API responses follow this consistent format:
```json
{
  "statusCode": 200,
  "data": {
    "user": {
      "_id": "user_id",
      "fullname": "John Doe",
      "username": "johndoe",
      "email": "john@example.com"
    },
    "AccessToken": "jwt_access_token",
    "RefreshToken": "jwt_refresh_token"
  },
  "message": "Operation successful",
  "success": true
}
```

## 🔧 Key Components

### Frontend Architecture

#### AuthContext
- Manages global authentication state
- Provides auth methods to all components
- Handles token storage and retrieval

#### Protected Routes
- Automatically redirects unauthenticated users
- Maintains auth state across page refreshes
- Seamless user experience

#### Custom Hooks
- `useAuth()` - Access authentication context
- Reusable authentication logic

### Backend Architecture

#### Middleware Authentication
- JWT token verification
- Automatic token refresh
- Route protection

#### User Model
- Secure password hashing
- Token generation methods
- Data validation

#### Error Handling
- Consistent error responses
- Custom error classes
- Graceful error management

## 🔒 Security Features

### 🛡️ **Authentication Security**
- **JWT Tokens** with short expiry times
- **Refresh Token** rotation
- **HTTP-Only Cookies** to prevent XSS
- **Secure Cookie** flags in production
- **CORS** configuration

### 🔐 **Password Security**
- **bcrypt** hashing with salt rounds
- **Password validation** requirements
- **Secure password change** flow

### 🚫 **Attack Prevention**
- **XSS Protection** via HTTP-only cookies
- **CSRF Protection** with SameSite cookies
- **Input Validation** and sanitization
- **Rate Limiting** ready for implementation

## 🎨 UI/UX Features

### 📱 **Responsive Design**
- Mobile-first approach
- Tailwind CSS utilities
- Modern glassmorphism effects
- Smooth animations and transitions

### 🎭 **User Experience**
- Loading states for all actions
- Clear error messaging
- Form validation feedback
- Intuitive navigation

### 🎪 **Components**
- Reusable UI components
- Consistent design system
- Accessible form elements
- Modern iconography

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
```bash
npm run build
# Deploy dist/ folder
```

### Backend Deployment (Railway/Heroku)
```bash
# Set environment variables in production
# Deploy with your preferred platform
```

### Environment Configuration
```env
# Production environment variables
NODE_ENV=production
MONGODB_URI=mongodb+srv://...
JWT_ACCESS_SECRET=your-production-secret
JWT_REFRESH_SECRET=your-production-refresh-secret
```

## 🧪 Testing

### Frontend Testing
```bash
npm run test
```

### Backend Testing
```bash
npm run test
```

## 📈 Performance Optimizations

- **Code Splitting** with React lazy loading
- **Optimized Bundling** with Vite
- **Efficient Re-rendering** with React optimization
- **Database Indexing** for fast queries
- **Caching Strategies** for API responses

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you have any questions or run into issues, please:
1. Check the existing issues
2. Create a new issue with detailed information
3. Join our community discussions

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Express.js** for the robust backend framework
- **MongoDB** for the flexible database
- **Tailwind CSS** for the utility-first styling
- **Vite** for the lightning-fast build tool

---

**Made with ❤️ by Tushar Tanwar**

> 🔗 **Live Demo**: Deploying soon 
> 📧 **Contact**: tushartanwar183@gmail.com  
