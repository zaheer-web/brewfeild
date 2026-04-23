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

  // Responsive cards
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
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

  // Visible cards
  const getVisible = () => {
    return Array.from({ length: cardsToShow }, (_, i) =>
      testimonials[(index + i) % testimonials.length]
    );
  };

  return (
    <section className="py-20 relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
          alt="coffee"
          className="w-full h-full object-cover"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#2C1A12]/90"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-[#F5EBDD]">

        <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-wide">
          Customer <span className="text-[#D4AF37]">Testimonials</span>
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {getVisible().map((item, i) => {
            const isCenter = i === Math.floor(cardsToShow / 2);

            return (
              <div
                key={i}
                className={`p-6 md:p-8 rounded-xl shadow-xl transition duration-500 flex flex-col justify-between h-[260px] ${
                  isCenter
                    ? "bg-gradient-to-r from-[#D4AF37] to-[#b8962e] text-[#2C1A12] scale-105"
                    : "bg-[#F5EBDD] text-[#4B2E2B] opacity-80"
                }`}
              >
                {/* QUOTE CIRCLE */}
                <div className="flex justify-center mb-4">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full text-xl font-bold shadow-md ${
                      isCenter
                        ? "bg-[#2C1A12] text-[#D4AF37]"
                        : "bg-[#D4AF37] text-[#2C1A12]"
                    }`}
                  >
                    "
                  </div>
                </div>

                {/* TEXT */}
                <p className="text-sm md:text-base leading-relaxed flex-1">
                  {item.text}
                </p>

                {/* NAME */}
                <p
                  className={`text-sm font-semibold mt-4 pt-2 border-t text-right ${
                    isCenter
                      ? "border-[#2C1A12]/30"
                      : "border-[#d6bfa3]/40"
                  }`}
                >
                  — {item.name}
                </p>
              </div>
            );
          })}

        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                i === index
                  ? "bg-[#D4AF37] scale-125"
                  : "bg-[#d6bfa3]/50"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}