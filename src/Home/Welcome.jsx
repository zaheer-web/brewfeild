import { useState, useEffect } from "react";

export default function Welcome() {
  const images1 = [
    "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  ];

  const images2 = [
    "https://images.unsplash.com/photo-1498804103079-a6351b050096",
    "https://images.unsplash.com/photo-1521017432531-fbd92d768814",
    "https://images.unsplash.com/photo-1507914372368-b2b085b925a1",
  ];

  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const i1 = setInterval(() => {
      setIndex1((prev) => (prev + 1) % images1.length);
    }, 3000);

    const i2 = setInterval(() => {
      setIndex2((prev) => (prev + 1) % images2.length);
    }, 3500);

    return () => {
      clearInterval(i1);
      clearInterval(i2);
    };
  }, []);

  return (
    <section className="bg-[#e8d8c3] py-24">

      <div className="max-w-7xl mx-auto px-6 space-y-28">

        {/* SECTION 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="relative w-[300px] md:w-[380px] h-[300px] rotate-[-6deg]">

              {images1.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="coffee"
                  className={`absolute w-full h-full object-cover rounded-xl shadow-xl transition-all duration-1000 ${
                    i === index1
                      ? "opacity-100 scale-105"
                      : "opacity-0 scale-100"
                  }`}
                />
              ))}

            </div>
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2d1b12]">
              Welcome to{" "}
              <span className="text-[#5a3b2e]">Cafe Brewfield</span>
            </h2>

            <p className="mt-6 text-[#5c4638] text-lg leading-relaxed">
              A premium Italian Tea & Coffee House bringing refined taste,
              elegant ambiance, and unforgettable experiences.
            </p>

            <p className="mt-4 text-[#7a6252] leading-relaxed">
              We are building more than cafés — we are creating a lifestyle
              destination across Delhi NCR with a focus on luxury,
              comfort, and timeless design.
            </p>

            <button className="mt-6 bg-[#2d1b12] text-white px-6 py-3 rounded-md hover:scale-105 transition">
              Explore More →
            </button>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2d1b12]">
              Coffee Crafted for{" "}
              <span className="text-[#5a3b2e]">Perfection</span>
            </h2>

            <p className="mt-6 text-[#5c4638] text-lg leading-relaxed">
              Every cup we serve is a blend of passion, precision, and premium
              ingredients curated to deliver a luxurious coffee experience.
            </p>

            <p className="mt-4 text-[#7a6252] leading-relaxed">
              From sourcing the finest beans to crafting each brew, we ensure
              every sip reflects quality, warmth, and sophistication.
            </p>

            <button className="mt-6 bg-[#2d1b12] text-white px-6 py-3 rounded-md hover:scale-105 transition">
              View All →
            </button>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center order-1 md:order-2">
            <div className="relative w-[300px] md:w-[380px] h-[300px] rotate-[6deg]">

              {images2.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="coffee"
                  className={`absolute w-full h-full object-cover rounded-xl shadow-xl transition-all duration-1000 ${
                    i === index2
                      ? "opacity-100 scale-105"
                      : "opacity-0 scale-100"
                  }`}
                />
              ))}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}