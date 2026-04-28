import bg from "../img/bg.avif"; // 👈 apni image

export default function Presence() {
  return (
    <section className="relative h-[70vh] flex items-center overflow-hidden">

      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="cafe"
          className="w-full h-full object-cover brightness-[0.5] scale-105"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* GOLD TEXTURE GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(200,169,106,0.12),transparent_60%)]"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-[60px]">

        <span className="text-[#C8A96A] text-[13px] tracking-[3px] uppercase">
          Our Presence
        </span>

        <h2 className="text-[42px] md:text-[48px] font-serif text-white mt-[10px] mb-[15px]">
          Expanding Across <span className="text-[#C8A96A]">Delhi NCR</span>
        </h2>

        <p className="text-white/70 max-w-[520px] leading-[1.8] mb-[25px]">
          With our roots in Ghaziabad and Delhi, Cafe Brewfield is expanding
          to multiple prime locations across NCR. Every new outlet reflects
          our dedication to elegance and quality.
        </p>

        {/* LOCATION ICONS */}
        <div className="flex items-center gap-[20px] mb-[20px]">

          <div className="w-[50px] h-[50px] rounded-full border border-[#C8A96A] flex items-center justify-center text-[#C8A96A] text-[20px] shadow-[0_0_20px_rgba(200,169,106,0.3)]">
            📍
          </div>

          <div className="w-[50px] h-[50px] rounded-full border border-[#C8A96A] flex items-center justify-center text-[#C8A96A] text-[20px] shadow-[0_0_20px_rgba(200,169,106,0.3)]">
            📍
          </div>

          <span className="text-white/60 text-[14px]">
            And More Locations Coming
          </span>

        </div>

      </div>

      {/* 📱 RESPONSIVE */}
      <style jsx>{`
        @media (max-width: 900px) {
          section {
            height: 60vh;
          }
        }

        @media (max-width: 600px) {
          section {
            height: auto;
            padding: 80px 20px;
          }
        }
      `}</style>

    </section>
  );
}