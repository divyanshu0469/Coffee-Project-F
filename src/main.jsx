import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import G1 from "./components/G1"
import G8 from "./components/G8"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import ContactUs from './components/ContactUs'
import Menu from './components/Menu'
import About from './components/About'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="text-white font-mont">
    <NavBar/>
    <BrowserRouter>
    <Routes>
      <Route path='/app' element={<App/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path="/home" element={<G1/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
      <Route path="/branch" element={<G8/>}/>
      <Route path="/about" element={<About/>}/>

    </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  </React.StrictMode>,
)
