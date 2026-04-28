import bg from "../img/bg.avif"; // 👈 apni image yahan daal

export default function MenuHero() {
  return (
    <section className="relative h-[55vh] flex items-center overflow-hidden">

      {/* 🔥 BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="menu"
          className="w-full h-full object-cover brightness-[0.5] scale-105"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* GOLD GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(200,169,106,0.15),transparent_60%)]"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-[60px]">

        <h1 className="text-[42px] md:text-[48px] font-serif text-white mb-[10px]">
          Our <span className="text-[#C8A96A]">Menu</span>
        </h1>

        <p className="text-white/70 text-[16px] max-w-[520px]">
          Handcrafted Italian Coffees, Teas, and Delights
        </p>

        {/* OPTIONAL GOLD DIVIDER */}
        <div className="w-[60px] h-[2px] bg-[#C8A96A] mt-[18px]"></div>

      </div>

      {/* 📱 RESPONSIVE */}
      <style jsx>{`
        @media (max-width: 900px) {
          section {
            height: 45vh;
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