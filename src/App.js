import React, { useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/cart/Cart';
import Contact from './pages/contact/Contact';
import Home from './pages/Home';
import Login from './pages/login/Login';
import Menu from './pages/menu/Menu';
import ReservationForm from './pages/reservation/ReservationForm';
import Dashboard from './CMS/Dashboard'
import { ProSidebarProvider } from 'react-pro-sidebar';

function App() {

  return (
        <ProSidebarProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/reservation' element={<ReservationForm />} />   
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
      </ProSidebarProvider>
  )
};

export default App;
