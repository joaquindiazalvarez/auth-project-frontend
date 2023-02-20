import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { createContext, useState } from 'react';
import './App.css';
import { Home } from './pages/home.js'
import { Login } from './pages/login.js'
import { Register } from './pages/register.js'
import { PrivateRoute } from "./pages/private_route.js";
import { Birthday } from './pages/birthday';
import { Navbar } from './components/navbar';

export const tokenContext = createContext();

const App = ()=>{
  const [token, setToken] = useState("");
  return(
    <tokenContext.Provider value={{ token, setToken }}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route element={<PrivateRoute/>}>
            <Route path="/birthday" element={<Birthday/>} exact/>
          </Route>
        </Routes>
      </Router>
    </tokenContext.Provider>
  )
}

export default App;
