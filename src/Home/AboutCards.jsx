import { FaCoffee, FaBullseye, FaStar } from "react-icons/fa";

export default function AboutCards() {
  const cards = [
    {
      title: "About Us",
      icon: <FaCoffee />,
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
      content: [
        "Cafe Brewfield is a premium Italian-inspired café brand built around quality, ambiance, and unforgettable customer experiences.",
        "With a strong presence across Ghaziabad and Delhi NCR, we are redefining café culture through elegant design, curated menus, and a luxurious environment.",
      ],
    },
    {
      title: "Our Mission",
      icon: <FaBullseye />,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
      content: [
        "To deliver world-class coffee experiences with consistency, innovation, and attention to detail.",
        "We aim to create spaces where people connect, relax, and enjoy moments that go beyond just coffee.",
      ],
    },
    {
      title: "Why Choose Brewfield",
      icon: <FaStar />,
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
      content: [
        "Premium Italian Coffee & Ingredients",
        "Luxury Ambiance & Instagram-Worthy Interiors",
        "Customer-First Experience Approach",
        "Strong Brand Identity & Market Position",
        "High Growth Franchise Opportunity",
      ],
      list: true,
    },
  ];

  return (
    <section className="relative py-28 bg-[#0f0b08] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0b08] via-[#1a120b] to-[#0f0b08]"></div>

      {/* GOLD LIGHT BLOBS */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#D4AF37]/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-[#f8efe5]">
            Discover{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#f1d77a] bg-clip-text text-transparent">
              Brewfield
            </span>
          </h2>

          <div className="w-24 h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent mx-auto mt-6"></div>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10">

          {cards.map((card, i) => (
            <div
              key={i}
              className="group relative rounded-3xl overflow-hidden border border-[#2a1a12] bg-[#15100c]/80 backdrop-blur-xl shadow-xl hover:shadow-[#D4AF37]/20 transition duration-500 hover:-translate-y-3"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b08]/80 to-transparent"></div>
              </div>

              {/* CONTENT */}
              <div className="p-6">

                {/* ICON */}
                <div className="text-[#D4AF37] text-2xl mb-3 group-hover:scale-110 transition">
                  {card.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold text-[#f5e6d3] mb-3">
                  {card.title}
                </h3>

                {/* LINE */}
                <div className="w-10 h-[2px] bg-[#D4AF37] mb-4"></div>

                {/* TEXT */}
                <div className="text-[#cbb8a6] text-sm leading-relaxed space-y-3">

                  {card.list ? (
                    <ul className="space-y-2">
                      {card.content.map((item, index) => (
                        <li key={index} className="flex gap-2">
                          <span className="text-[#D4AF37]">✔</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    card.content.map((text, index) => (
                      <p key={index}>{text}</p>
                    ))
                  )}

                </div>

              </div>

              {/* HOVER GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition"></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}