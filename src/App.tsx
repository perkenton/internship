import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import OrderPage from './components/OrderPage/OrderPage';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='order' element={<OrderPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
