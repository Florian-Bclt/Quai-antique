import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/cart/Cart';
import Contact from './pages/contact/Contact';
import Home from './pages/Home';
import Login from './pages/login/Login';
import Menu from './pages/menu/Menu';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
};

export default App;
