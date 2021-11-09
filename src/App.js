import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import Home from "./pages/home";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from "./pages/about";
import Profile from "./pages/Profile";

function App() {
  return (
      <BrowserRouter>
          <Navbar/>
          <div className='container-fluid pt-4'>
              <Routes>
                  <Route path='/' exact element={<Home/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/profile/:name' element={<Profile/>}/>
              </Routes>
          </div>
          </BrowserRouter>
  )
}

export default App;
