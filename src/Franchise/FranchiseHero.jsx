import bg from "../img/bg.avif"; // 👈 apni image

export default function FranchiseHero() {
  return (
    <section className="relative h-[70vh] flex items-center overflow-hidden">

      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="franchise"
          className="w-full h-full object-cover brightness-[0.5] scale-105"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* GOLD GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(200,169,106,0.15),transparent_60%)]"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-[60px]">

        <h1 className="text-[42px] md:text-[50px] font-serif text-white mb-[15px] leading-tight">
          Own a Cafe Brewfield <br />
          <span className="text-[#C8A96A]">Franchise</span>
        </h1>

        <p className="text-white/70 max-w-[500px] mb-[30px] leading-[1.8]">
          Be a part of a fast-growing Italian Tea & Coffee House brand
          in Delhi NCR
        </p>

        {/* BUTTONS */}
        <div className="flex gap-[16px] flex-wrap">

          {/* PRIMARY */}
          <a
            href="/contact"
            className="bg-[#C8A96A] text-black px-[32px] py-[14px] text-[13px] tracking-[2px] uppercase transition hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(200,169,106,0.5)]"
          >
            Apply Now
          </a>

          {/* OUTLINE */}
          <a
            href="#"
            className="border border-white/30 text-white px-[32px] py-[14px] text-[13px] tracking-[2px] uppercase transition hover:border-[#C8A96A] hover:text-[#C8A96A]"
          >
            Download Brochure
          </a>

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