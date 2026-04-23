import { useNavigate } from "react-router-dom";

export default function GrowthSection() {
  const navigate = useNavigate();

  return (
    <section className="relative py-24">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1508057198894-247b23fe5ade"
          alt="city"
          className="w-full h-full object-cover"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2C1A12]/90 via-[#3b2418]/80 to-[#4B2E2B]/70"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-[#F5EBDD]">

        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-wide">
          Growing Across{" "}
          <span className="text-[#D4AF37]">Delhi NCR</span>
        </h2>

        <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto mb-6"></div>

        <p className="text-lg md:text-xl text-[#e6d3b3] mb-8 leading-relaxed">
          Currently present in Ghaziabad & Delhi, Cafe Brewfield is rapidly 
          expanding across prime locations in NCR with a strong vision 
          to become a recognizable premium cafe brand.
        </p>

        {/* BUTTON WITH NAVIGATION */}
        <button
          onClick={() => navigate("/contact")}
          className="bg-gradient-to-r from-[#D4AF37] to-[#b8962e] text-[#2C1A12] px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition duration-300"
        >
          Become a Franchise Partner
        </button>

      </div>
    </section>
  );
}