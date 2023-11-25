import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { FaCat, FaHeart, FaUserAlt, FaHome } from 'react-icons/fa';
import './App.css'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Care from './pages/Care';
import Food from "./pages/Food";
import SafeFood from "./pages/SafeFood";
import CareTips from "./pages/CareTips";
import Profile from './pages/Profile';
import BreedInfo from './pages/BreedInfo';
import BreedDetails from './pages/BreedDetails';

function App() {
  return (
    <BrowserRouter>
      <header>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/care" element={<Care />} />
        <Route path="/food" element={<Food />} />
        <Route path="/safefood" element={<SafeFood />} />
        <Route path="/caretips" element={<CareTips />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/breedinfo/:breedId" element={<BreedInfo />} />
        <Route path="/breed/:breedid" element={<BreedDetails />} />
      </Routes>
      <footer>
        <NavLink to="/home" className="iconWrapper">
          <FaHome className="icon" /> Home
        </NavLink>
        <NavLink to="/gallery" className="iconWrapper">
          <FaCat className="icon" /> Gallery
        </NavLink>
        <NavLink to="/care" className="iconWrapper">
          <FaHeart className="icon" /> Care
          </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <FaUserAlt className="icon" /> Profile
          </NavLink>
      </footer>
    </BrowserRouter>
  )
}

export default App
