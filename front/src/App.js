import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Tarjeta from './pages/createCard';
import MostrarTarjetas from './pages/showCards';
import './pages/Index.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import data from './data';
import { useState } from 'react';

function App() {
  const [userdata,setUserData] = useState({})
  
  return (
    <div className="App">
      <data.Provider value={{userdata,setUserData}}>
        <Router>
          <Routes>
            <Route path="/home"
              element={userdata && userdata._id ? <Home /> : <Login/>}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='/crearTarjeta' element={<Tarjeta />}/>
            <Route path='/mostrarTarjeta' element={<MostrarTarjetas/>}/>
          </Routes>
        </Router>
      </data.Provider>

    </div>
  );
}

export default App;