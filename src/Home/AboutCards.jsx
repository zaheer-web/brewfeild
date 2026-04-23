export default function AboutCards() {
  const cards = [
    {
      title: "About Us",
      content: [
        "Cafe Brewfield is a premium Italian-inspired café brand built around quality, ambiance, and unforgettable customer experiences.",
        "With a strong presence across Ghaziabad and Delhi NCR, we are redefining café culture through elegant design, curated menus, and a luxurious environment.",
      ],
    },
    {
      title: "Our Mission",
      content: [
        "To deliver world-class coffee experiences with consistency, innovation, and attention to detail.",
        "We aim to create spaces where people connect, relax, and enjoy moments that go beyond just coffee.",
      ],
    },
    {
      title: "Why Choose Brewfield",
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
    <section className="py-16 md:py-20 bg-[#EADBC8]">

      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C1A12]">
            Discover <span className="text-[#D4AF37]">Brewfield</span>
          </h2>
          <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto mt-4"></div>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-[#F5EBDD] rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
            >
              
              {/* HEADER */}
              <div className="bg-gradient-to-r from-[#3b2418] to-[#2C1A12] text-center py-4">
                <h3 className="text-[#F5EBDD] text-lg md:text-xl font-semibold tracking-wide">
                  {card.title}
                </h3>
              </div>

              {/* CONTENT */}
              <div className="p-6 text-[#4B2E2B] space-y-4 text-sm md:text-base leading-relaxed">

                {card.list ? (
                  <ul className="space-y-3">
                    {card.content.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-[#D4AF37] mt-1 text-lg">✔</span>
                        <span>{item}</span>
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
          ))}

        </div>

      </div>
    </section>
  );
}