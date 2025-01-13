import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from './LoginButton';
import { LogoutButton } from './LogoutButton';
import './App.css';

function App() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div className="app-container">
      <h1>Bienvenido a mi zona de confort papiii</h1>
      {isAuthenticated ? (
        <div className="user-info">
          <h2>Hola, {user?.name}!</h2>
          <img src={user?.picture} alt={user?.name} className="user-avatar" />
          <p>Email: {user?.email}</p>
          <LogoutButton />
        </div>
      ) : (
        <div className="login-container">
          <p>Por favor, inicia sesión para continuar.</p>
          <LoginButton />
        </div>
      )}
    </div>
  );
}

export default App;
