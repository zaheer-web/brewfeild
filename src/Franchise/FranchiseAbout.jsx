import img from "../img/bg.avif"; // 👈 apni image

export default function FranchiseAbout() {
  return (
    <section className="relative bg-black py-[110px] px-[60px] overflow-hidden">

      {/* ✨ GOLD GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(200,169,106,0.08),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-[70px] items-center">

        {/* LEFT CONTENT */}
        <div>

          <h2 className="text-[38px] font-serif text-white mb-[15px]">
            About <span className="text-[#C8A96A]">Cafe Brewfields</span>
          </h2>

          <div className="w-[60px] h-[2px] bg-[#C8A96A] mb-[25px]"></div>

          <p className="text-white/70 leading-[1.8] mb-[20px]">
            Cafe Brewfield is a premium Italian Tea & Coffee House offering a refined
            cafe experience. With presence in Ghaziabad and Delhi, we are expanding
            rapidly across NCR with a strong focus on quality, ambiance, and consistency.
          </p>

          <p className="text-white/80 font-medium leading-[1.8] border-l-2 border-[#C8A96A] pl-[15px]">
            We are not just building cafes — we are building a brand people connect with.
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">

          <div className="overflow-hidden border border-[#C8A96A]/20 shadow-[0_20px_60px_rgba(0,0,0,0.8)] group">

            <img
              src={img}
              alt="coffee"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.08] brightness-[0.85]"
            />

            {/* GOLD LIGHT OVERLAY */}
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(200,169,106,0.08),transparent_50%)]"></div>

          </div>

        </div>

      </div>

      {/* 📱 RESPONSIVE */}
      <style jsx>{`
        @media (max-width: 900px) {
          section {
            padding: 80px 30px;
          }
        }

        @media (max-width: 600px) {
          section {
            padding: 60px 20px;
          }
        }
      `}</style>

    </section>
  );
}