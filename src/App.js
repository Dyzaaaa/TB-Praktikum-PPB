import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { HiHome } from 'react-icons/hi'
import { FaCat, FaHeart } from 'react-icons/fa';
import './App.css'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Care from './pages/Care';
import Food from "./pages/Food";
import SafeFood from "./pages/SafeFood";
import CareTips from "./pages/CareTips";

function App() {
  return (
    <BrowserRouter>
      <header>
      </header>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/care" element={<Care />} />
        <Route path="/food" element={<Food />} />
        <Route path="/safefood" element={<SafeFood />} />
        <Route path="/caretips" element={<CareTips />} />
      </Routes>
      <footer>
        <NavLink to="/home" className="iconWrapper">
          <HiHome className="icon" /> Home
        </NavLink>
        <NavLink to="/gallery" className="iconWrapper">
          <FaCat className="icon" /> Gallery
        </NavLink>
        <NavLink to="/care" className="iconWrapper">
          <FaHeart className="icon" /> Care
          </NavLink>
      </footer>
    </BrowserRouter>
  )
}

export default App
