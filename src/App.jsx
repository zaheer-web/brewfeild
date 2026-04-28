import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// Pages


import Home from "./pages/Home";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Franchise from "./pages/Franchise";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/franchise" element={<Franchise/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}