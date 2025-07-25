// App.jsx
import React from 'react';
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from './hooks/useAuth';
import Loading from './components/ui/Loading';
import Dashboard from './components/layout/Dashboard';
import AuthPages from './components/auth/AuthPages';

// Main App Component (inside provider)
const AppContent = () => {
  const { user } = useAuth();

  // if (loading) {
  //   return <Loading />;
  // }

  return user ? <Dashboard /> : <AuthPages />;
};

// Root App Component (with provider wrapper)
const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;