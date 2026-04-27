import { useState, useEffect } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "An absolutely premium experience. The ambiance feels like Europe. The coffee quality and service were outstanding.",
      name: "Rahul Mehta",
    },
    {
      text: "Not just coffee, it's a vibe. Perfect place for meetings and relaxation.",
      name: "Sneha Kapoor",
    },
    {
      text: "Best cafe experience in Ghaziabad. Interiors and service were top-notch.",
      name: "Aman Verma",
    },
    {
      text: "Amazing coffee quality and classy interiors. Perfect for work and chill.",
      name: "Riya Sharma",
    },
    {
      text: "A perfect blend of taste and ambiance. Highly recommended.",
      name: "Karan Malhotra",
    },
  ];

  const [index, setIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Responsive
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getVisible = () => {
    return Array.from({ length: cardsToShow }, (_, i) =>
      testimonials[(index + i) % testimonials.length]
    );
  };

  return (
    <section className="relative py-28 bg-[#0f0b08] overflow-hidden">

      {/* SAME BG AS OTHER SECTIONS */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0b08] via-[#1a120b] to-[#0f0b08]"></div>

      {/* GOLD BLOBS */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#D4AF37]/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#f8efe5] mb-16">
          Customer{" "}
          <span className="bg-gradient-to-r from-[#D4AF37] to-[#f1d77a] bg-clip-text text-transparent">
            Testimonials
          </span>
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {getVisible().map((item, i) => (
            <div
              key={i}
              className="group relative bg-[#15100c]/80 backdrop-blur-xl border border-[#2a1a12] rounded-2xl p-8 shadow-xl transition duration-500 hover:-translate-y-3 hover:shadow-[#D4AF37]/20"
            >

              {/* QUOTE ICON */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#D4AF37] text-[#1a120b] text-xl font-bold shadow-lg">
                  "
                </div>
              </div>

              {/* TEXT */}
              <p className="text-[#cbb8a6] text-sm md:text-base leading-relaxed mb-6">
                {item.text}
              </p>

              {/* LINE */}
              <div className="w-10 h-[2px] bg-[#D4AF37] mx-auto mb-4"></div>

              {/* NAME */}
              <p className="text-[#f5e6d3] font-semibold">
                {item.name}
              </p>

              {/* HOVER GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition"></div>

            </div>
          ))}

        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                i === index
                  ? "bg-[#D4AF37] scale-125"
                  : "bg-[#cbb8a6]"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}