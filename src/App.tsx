import React from 'react';
import './App.css';
import { UserProvider } from './contexts/UserContext';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Routes />
      </UserProvider>
    </div>
  );
}

export default App;
