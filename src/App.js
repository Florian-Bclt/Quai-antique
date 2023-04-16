import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/cart/Cart';
import Contact from './pages/contact/Contact';
import Home from './pages/Home';
import Login from './pages/login/Login';
import Menu from './pages/menu/Menu';
import ReservationForm from './pages/reservation/ReservationForm';
import Dashboard from './CMS/Dashboard'
import Team from './CMS/pages/team/Team';
import Clients from './CMS/pages/clients/Clients';
import Tables from './CMS/pages/tables/Tables';
import EditMenu from './CMS/pages/editMenu/EditMenu';
import EditCart from './CMS/pages/editCart/EditCart';
import AddMember from './CMS/pages/addMember/AddMember';
import Calendar from './CMS/pages/calendar/Calendar';
import Register from './pages/register/Register';


function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/reservation' element={<ReservationForm />} />   
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/edit-menu" element={<EditMenu />} />
          <Route path="/edit-cart" element={<EditCart />} />
          <Route path="/add-member" element={<AddMember />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
    </>
  )
};

export default App;
