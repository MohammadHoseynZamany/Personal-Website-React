import React from "react"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar"
import './styles/main.css'

export default function App() {
  return (
    <div className="appContainer">
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route index path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}