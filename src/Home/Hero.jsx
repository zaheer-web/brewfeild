import coffeeVideo from "../img/ha-1.mp4";

export default function Hero() {
  return (
    <section className="h-screen relative flex items-center overflow-hidden">

      {/* VIDEO BACKGROUND (ALL DEVICES) */}
      <video
        src={coffeeVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OPTIONAL FALLBACK IMAGE (just in case) */}
      <img
        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24"
        alt="coffee shop"
        className="absolute inset-0 w-full h-full object-cover opacity-0"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f0b08]/90 via-[#1a120b]/70 to-[#0f0b08]/90"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#f8efe5]">
            Elevate Your{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#f1d77a] bg-clip-text text-transparent">
              Coffee Ritual
            </span>
            <br />
            Into Pure{" "}
            <span className="italic text-[#e6c27a]">
              Luxury
            </span>
          </h1>

          <p className="mt-6 text-[#d9c7b8] text-lg md:text-xl leading-relaxed">
            Indulge in handcrafted brews, rich aromas, and an ambiance designed
            for those who appreciate the finer side of coffee culture.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5">
            <button className="bg-gradient-to-r from-[#D4AF37] to-[#b8962e] text-[#1a120b] px-8 py-3 rounded-full font-semibold shadow-xl hover:scale-105 transition duration-300">
              Explore Menu
            </button>

            <button className="border border-[#D4AF37] text-[#f5d67a] px-8 py-3 rounded-full font-semibold hover:bg-[#D4AF37] hover:text-[#1a120b] transition duration-300">
              Book Experience
            </button>
          </div>

        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0f0b08] to-transparent"></div>
    </section>
  );
}