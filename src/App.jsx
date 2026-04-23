import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Franchise from "./pages/Franchise";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Footer from "./component/Footer";




export default function App() {
  return (
    <Router>
      <Navbar/>

      {/* Padding top because navbar fixed hai */}
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/franchise" element={<Franchise/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/menu" element={<Menu/>} />

        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}