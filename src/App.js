import React from 'react';
import Navibar from './components/navbar.js';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home.js';
import Contact from './pages/contact.js';
import LoginForm from './pages/pricing.js';
import AdminLogin from './pages/admin/adminlogin.js';
import AdminDashboard from './pages/admin/admindashboard.js';
import FormList from './pages/FAQ.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Services from './pages/services.js'
import Success from './pages/success'


function App() {
    return ( 
      <ChakraProvider>
      <div >
          <Navibar />
          <ToastContainer position="top-center"/>
            <Routes>
            <Route exact path="/" element={<Home />}>
            </Route>
            <Route path="/admin" element={<AdminLogin />}>
            </Route>
            <Route path="/contact" element={<Contact />}>
            </Route>
            <Route path="/admindashboard/*" element={<AdminDashboard />}>
            </Route>
            <Route path="/pricing/:id" element={<LoginForm />}>
            </Route>
            <Route path="/FAQ" element={<FormList />}>
            </Route>
            <Route path="/services" element={<Services />}>
            </Route>
            <Route path="/stripe/success/:id" element={<Success />}>
            </Route>
            </Routes>
        </div>
    </ChakraProvider> 
    )
}

export default App;
