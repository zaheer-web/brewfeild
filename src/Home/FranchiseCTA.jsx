import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FranchiseCTA() {
  return (
    <section className="relative py-20 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
          alt="coffee bg"
          className="w-full h-full object-cover"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2C1A12]/95 via-[#3b2418]/90 to-[#4B2E2B]/85"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-[#F5EBDD]">

        <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-wide">
          Own a{" "}
          <span className="text-[#D4AF37]">Cafe Brewfield Franchise</span>
        </h2>

        <p className="text-[#e6d3b3] mb-8 text-lg">
          Join a fast-growing cafe brand and be part of a premium experience business.
        </p>

        {/* BUTTON */}
        <Link to="/contact">
          <button className="bg-gradient-to-r from-[#D4AF37] to-[#b8962e] text-[#2C1A12] px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition duration-300">
            Apply for Franchise
          </button>
        </Link>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-4 mt-10">

          <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#2C1A12] transition cursor-pointer">
            <FaFacebookF />
          </div>

          <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#2C1A12] transition cursor-pointer">
            <FaTwitter />
          </div>

          <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#2C1A12] transition cursor-pointer">
            <FaInstagram />
          </div>

        </div>

      </div>
    </section>
  );
}