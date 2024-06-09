import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Course from "./pages/Course"
import Profile from "./pages/Profile"
import SIngleCourse from "./components/SIngleCourse"
import Modules from "./components/Modules"

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course/:courseid/module/?moduleid=0" element={<Course />} />
          <Route path="/course/:courseid/module/:moduleid" element={<Course />} />

          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
