import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "relative hover:text-[#D4AF37] transition duration-300";

  const activeClass =
    "text-[#D4AF37] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#D4AF37]";

  return (
    <nav className="fixed top-0 left-0 w-full h-[80px] z-50 bg-[#2C1A12]/95 backdrop-blur-md text-[#F5EBDD] shadow-lg">

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        
        {/* LOGO */}
        <h1 className="text-xl md:text-2xl font-bold tracking-wide">
          <span className="text-[#D4AF37]">Cafe</span> Brewfield
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 font-medium">
          <NavLink to="/" className={({ isActive }) => isActive ? activeClass : linkClass}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : linkClass}>About</NavLink>
          <NavLink to="/franchise" className={({ isActive }) => isActive ? activeClass : linkClass}>Franchise</NavLink>
          <NavLink to="/menu" className={({ isActive }) => isActive ? activeClass : linkClass}>Menu</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : linkClass}>Contact</NavLink>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-[#2C1A12] border-t border-[#3b2418] px-6 flex flex-col gap-4 overflow-hidden transition-all duration-300 ${
          open ? "max-h-72 py-4" : "max-h-0"
        }`}
      >
        {["/", "/about", "/franchise", "/menu", "/contact"].map((path, i) => {
          const names = ["Home", "About", "Franchise", "Menu", "Contact"];
          return (
            <NavLink
              key={i}
              to={path}
              onClick={() => setOpen(false)}
              className="text-[#F5EBDD] hover:text-[#D4AF37] transition"
            >
              {names[i]}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}