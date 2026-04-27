import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FranchiseCTA() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#2d1b12]">
          Own a{" "}
          <span className="text-[#5a3b2e]">Cafe Brewfield Franchise</span>
        </h2>

        {/* TEXT */}
        <p className="text-[#5c4638] mt-4 text-lg">
          Join a fast-growing cafe brand and be part of a premium experience business.
        </p>

        {/* BUTTON */}
        <Link to="/contact">
          <button className="mt-8 bg-[#2d1b12] text-[#f8efe5] px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#5a3b2e] hover:scale-105 transition duration-300">
            Apply for Franchise →
          </button>
        </Link>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-4 mt-10">

          <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#d6c3b3] text-[#5a3b2e] hover:bg-[#5a3b2e] hover:text-white transition cursor-pointer">
            <FaFacebookF />
          </div>

          <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#d6c3b3] text-[#5a3b2e] hover:bg-[#5a3b2e] hover:text-white transition cursor-pointer">
            <FaTwitter />
          </div>

          <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#d6c3b3] text-[#5a3b2e] hover:bg-[#5a3b2e] hover:text-white transition cursor-pointer">
            <FaInstagram />
          </div>

        </div>

      </div>
    </section>
  );
}