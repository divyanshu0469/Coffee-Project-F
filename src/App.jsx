import Home from "./components/G1"
import Menu from "./components/G2"
import Menu2 from "./components/G3"
import Menu3 from "./components/G4"
import Shop from "./components/G5"
import Blog from "./components/G6"
import About from "./components/G7"
import Branch from "./components/G8"
import Contact from "./components/Footer"
import NavBar from "./components/NavBar.jsx"
import Login from "./components/Login"
import { Router, Routes, Route } from "react-router-dom"
const App = () => {
  return (
      <div className="text-white font-mont">
        <div><Home/></div>
        <div><Menu/></div>
        <div><Menu2/></div>
        <div><Menu3/></div>
        <div><Shop/></div>
        <div><Blog/></div>
        <div><About/></div>
        <div><Branch/></div>
      </div>
  )
}

export default App