import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Search from './components/search';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
