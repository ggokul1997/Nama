import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero.jsx'
import Programs from './components/Programs.jsx'
import EducationProgram from './pages/EducationProgram.jsx'
import CorporateProgram from './pages/CorporateProgram.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Programs />
          </>
        } />
        <Route path="/education" element={<EducationProgram />} />
        <Route path="/corporate" element={<CorporateProgram />} />
      </Routes>
    </Router>
  )
}
