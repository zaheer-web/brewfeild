export default function Hero() {
  return (
    <section className="h-screen pt-[80px] relative flex items-center overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb"
          alt="cafe"
          className="w-full h-full object-cover"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2C1A12]/95 via-[#3b2418]/85 to-[#4B2E2B]/70"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        {/* TEXT WRAPPER */}
        <div className="text-center md:text-left max-w-2xl">

          <h1 className="text-3xl md:text-6xl font-bold leading-tight text-[#F5EBDD] tracking-wide">
            We are not just a{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#b8962e] bg-clip-text text-transparent">
              Coffee Shop
            </span>
            ,<br />
            We are an{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#b8962e] bg-clip-text text-transparent italic">
              Experience
            </span>
          </h1>

          <p className="mt-6 text-[#d6bfa3] text-lg md:text-xl leading-relaxed">
            A premium Italian Tea & Coffee House redefining café culture 
            with elegance, warmth, and unforgettable ambiance.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">

            <button className="bg-gradient-to-r from-[#D4AF37] to-[#b8962e] text-[#2C1A12] px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition duration-300">
              Explore Our Story
            </button>

            <button className="border border-[#D4AF37] text-[#D4AF37] px-8 py-3 rounded-full font-semibold hover:bg-[#D4AF37] hover:text-[#2C1A12] transition duration-300">
              Partner With Us
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}