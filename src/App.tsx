import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from 'pages/Main/Main';
import Profile from 'pages/Profile/Profile';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/profile/:id" element={<Profile />} />
    </Routes>
  </Router>
);

export default App;
