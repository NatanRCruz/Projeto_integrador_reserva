import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './screens/cadastro';
import Login from './screens/login.tsx';
import './App.css'

const App: React.FC = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
