import bg from "../img/bg.avif"; // 👈 apni image daal

export default function AboutHero() {
  return (
    <section className="relative h-[70vh] flex items-center overflow-hidden">

      {/* 🔥 BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="cafe"
          className="w-full h-full object-cover scale-105 brightness-[0.5]"
        />
      </div>

      {/* ✨ GOLD OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

      {/* ✨ LIGHT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(200,169,106,0.15),transparent_60%)]"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-[60px]">

        <h1 className="text-[48px] md:text-[56px] font-serif text-white mb-[10px] leading-tight">
          About Cafe Brewfield
        </h1>

        <p className="text-[#C8A96A] text-[20px] mb-[18px]">
          Crafting Elegance in Every Cup
        </p>

        <p className="text-white/70 max-w-[520px] mb-[30px]">
          Be a part of a fast-growing Italian Tea & Coffee House brand in Delhi NCR
        </p>

        {/* BUTTON */}
        <a
          href="/franchise"
          className="inline-block bg-[#C8A96A] text-black px-[32px] py-[14px] text-[13px] tracking-[2px] uppercase transition hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(200,169,106,0.5)]"
        >
          Explore Franchise Opportunity
        </a>

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
            height: 55vh;
          }
        }
      `}</style>

    </section>
  );
}