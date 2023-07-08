import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Home } from "../src/pages/Home/Home";
// import AdminDashboard from "./Admin/AdminDashboard";
// import AdminLogin from "./Admin/AdminLogin/AdminLogin";
import Details from "../src/pages/Blogs_Details/Details";
import About from "../src/pages/About/About";
import Service from "../src/pages/Services/Service";
import Calenders from "../src/pages/Calenders/Calenders";
import Blogs from "../src/pages/Blogs/Blogs";
import { Portfolio } from "../src/pages/Portfolio/Portfolio";
import Contact from "../src/pages/Contacts/Contact";

function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* forntend route */}

          <Route extact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/calender" element={<Calenders />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
