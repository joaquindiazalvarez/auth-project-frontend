import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home.js'
import { Login } from './pages/login.js'
import { Register } from './pages/register.js'
import { PrivateRoute } from "./pages/private_route.js";
import { Birthday } from './pages/birthday';

const App = ()=>{
  return(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route element={<PrivateRoute/>}>
        <Route path="/birthday" element={<Birthday/>} exact/>
      </Route>
    </Routes>
  </Router>
  )
}

export default App;
