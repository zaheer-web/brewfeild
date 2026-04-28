export default function ContactMap() {
  return (
    <section className="relative bg-black py-[100px] px-[60px] overflow-hidden">

      {/* ✨ GOLD GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.06),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto">

        {/* TITLE */}
        <h2 className="text-center text-[34px] font-serif text-white mb-[40px]">
          Our <span className="text-[#C8A96A]">Locations</span>
        </h2>

        {/* MAP CONTAINER */}
        <div className="relative border border-[#C8A96A]/20 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]">

          {/* GOOGLE MAP */}
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Ghaziabad,Delhi&output=embed"
            className="w-full h-[400px] border-0"
            loading="lazy"
          ></iframe>

          {/* GOLD OVERLAY EFFECT */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(120deg,rgba(200,169,106,0.08),transparent_50%)]"></div>

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

          iframe {
            height: 300px;
          }
        }
      `}</style>

    </section>
  );
}