import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from 'pages/Main/Main';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  </Router>
);

export default App;
