import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


import Navbar from './components/Navbar';
import Conheca from './pages/Conheca';
import Home from './pages/Home'
import Marketplace from './pages/Marketplace'

function App() {
  return (
    <>
    <div className='bg-violet-600 w-full h-53 p-2 text-center text-white'>Compre ingressos com segurança.
    </div>
    <Navbar />
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path='/conheca' element={<Conheca />}/>
      <Route path='/marketplace' element={<Marketplace/>}/>

    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
