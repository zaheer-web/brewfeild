import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#2C1A12] text-[#F5EBDD] pt-16 pb-8">

      {/* TOP GRID */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-[#D4AF37]">Cafe</span> Brewfield
          </h2>

          <p className="text-[#d6bfa3] text-sm leading-relaxed">
            A premium Italian café experience bringing elegance,
            taste, and unforgettable ambiance across Delhi NCR.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#D4AF37]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#D4AF37]">About</Link></li>
            <li><Link to="/franchise" className="hover:text-[#D4AF37]">Franchise</Link></li>
            <li><Link to="/menu" className="hover:text-[#D4AF37]">Menu</Link></li>
            <li><Link to="/contact" className="hover:text-[#D4AF37]">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">
            Contact
          </h3>

          <ul className="space-y-2 text-sm text-[#d6bfa3]">
            <li>Ghaziabad | Delhi NCR</li>
            <li>info@cafebrewfield.com</li>
            <li>+91 9876543210</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">
            Follow Us
          </h3>

          <div className="flex gap-4">

            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#2C1A12] transition cursor-pointer">
              <FaFacebookF />
            </div>

            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#2C1A12] transition cursor-pointer">
              <FaInstagram />
            </div>

            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#2C1A12] transition cursor-pointer">
              <FaTwitter />
            </div>

          </div>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-[#3b2418] mt-10 pt-6 text-center text-sm text-[#d6bfa3]">
        © {new Date().getFullYear()} Cafe Brewfield. All rights reserved.
      </div>

    </footer>
  );
}