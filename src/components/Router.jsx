import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Account from '../pages/Account';
import ProtectedRoute from './ProtectedRoute';

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/account" element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
            }  
            />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;