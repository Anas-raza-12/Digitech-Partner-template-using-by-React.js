import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navber";
import Footer from "./components/Footer";
import Home from "./components/home";
import About from "./components/AboutUs";
import Services from "./components/Service";
import Blogs from "./components/Blog";
import Pricing from "./components/pricing";
import Contact from "./components/Contact";
import "./App.css";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Contact" element={<Contact />} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
