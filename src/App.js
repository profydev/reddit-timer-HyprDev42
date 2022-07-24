import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Search from './components/search';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
};

export default App;
