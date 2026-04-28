import bg from "../img/bg.avif"; // 👈 apni image

export default function ExperienceBanner() {
  return (
    <section className="relative h-[45vh] flex items-center justify-center text-center overflow-hidden">

      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="banner"
          className="w-full h-full object-cover brightness-[0.5] scale-105"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* GOLD GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.12),transparent_70%)]"></div>

      {/* CONTENT */}
      <div className="relative z-10 px-[20px]">

        <h2 className="text-[32px] md:text-[42px] font-serif text-white leading-[1.4]">
          Delivering <span className="text-[#C8A96A]">Experiences</span>, <br />
          Not Just Coffee
        </h2>

      </div>

      {/* 📱 RESPONSIVE */}
      <style jsx>{`
        @media (max-width: 900px) {
          section {
            height: 35vh;
          }
        }

        @media (max-width: 600px) {
          section {
            height: auto;
            padding: 70px 20px;
          }
        }
      `}</style>

    </section>
  );
}