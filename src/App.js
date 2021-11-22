import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import Home from "./pages/home";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from "./pages/about";
import Profile from "./pages/Profile";
import Alert from "./components/alert";
import AlertState from "./context/alert/AlertState";
import {GithubState} from "./context/github/githubState";

function App() {
  return (
      <GithubState>
          <AlertState>
              <BrowserRouter>
                  <Navbar/>
                  <div className='container-fluid pt-4'>
                      <Alert alert={{type: '', text:'test alert'}}/>
                      <Routes>
                          <Route path='/' exact element={<Home/>}/>
                          <Route path='/about' element={<About/>}/>
                          <Route path='/profile/:name' element={<Profile/>}/>
                      </Routes>
                  </div>
              </BrowserRouter>
          </AlertState>
      </GithubState>
  )
}

export default App;
