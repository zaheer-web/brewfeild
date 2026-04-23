export default function Welcome() {
  return (
    <section className="bg-[#F5EBDD] py-16 md:py-20">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#4B2E2B] mb-4">
            Welcome to{" "}
            <span className="text-[#D4AF37]">Cafe Brewfield</span>
          </h2>

          <div className="w-24 h-[2px] bg-[#D4AF37] mb-6"></div>

          <p className="text-[#5c3d2e] mb-4 leading-relaxed text-lg">
            A premium Italian Tea & Coffee House bringing refined taste,
            elegant ambiance, and unforgettable experiences.
          </p>

          <p className="text-[#6b4f3a] mb-6 leading-relaxed">
            We are building more than cafés — we are creating a lifestyle
            destination across Delhi NCR with a focus on luxury,
            comfort, and timeless design.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-3 gap-6 text-center mt-8">

            <div className="flex flex-col items-center">
              <div className="bg-[#D4AF37]/10 p-4 rounded-full mb-2 text-xl">
                🌿
              </div>
              <p className="text-[#4B2E2B] text-sm font-medium">
                Premium Ingredients
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-[#D4AF37]/10 p-4 rounded-full mb-2 text-xl">
                ☕
              </div>
              <p className="text-[#4B2E2B] text-sm font-medium">
                Italian Café Experience
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-[#D4AF37]/10 p-4 rounded-full mb-2 text-xl">
                🌍
              </div>
              <p className="text-[#4B2E2B] text-sm font-medium">
                Expanding Across NCR
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
            alt="coffee machine"
            className="rounded-xl shadow-xl w-full h-[350px] md:h-[420px] object-cover"
          />

          {/* GOLD BORDER EFFECT */}
          <div className="absolute inset-0 border-2 border-[#D4AF37]/40 rounded-xl pointer-events-none"></div>

        </div>

      </div>

    </section>
  );
}