import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import Footer from './components/Footer';


import Contact from './components/contacto/Contact';

import Inicio from "./components/perfil/Inicio";

import Nosotros from './components/Resume/nosotros';

import Testimonio from './components/Testimonial/Testimonio';

import Blog from './components/blog';

import Tarifa from './components/tarifa';

import AddButtonComponent from './components/AddButtonComponent';



function App() {
  return (

    <>
      <BrowserRouter>
        <Navbar />



        <Routes>
          {/* <Route path='/home' element={<h1 className="text-center pt-5">Home Pages</h1>}></Route> */}
          <Route path='/' element={<Inicio />}></Route>
          <Route path='/inicio' element={<Inicio />}></Route>

          <Route path='/nosotros' element={<Nosotros />}></Route>

          <Route path='/testimonio' element={<Testimonio />}></Route>


          <Route path='/blog' element={<Blog />}></Route>

          <Route path='/tarifa' element={<Tarifa />}></Route>


          <Route path='/contact' element={<Contact />}></Route>


        </Routes>

        <AddButtonComponent />
        <Footer />
      </BrowserRouter >

    </>
  );
}

export default App;
