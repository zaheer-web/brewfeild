import img from "../img/bg.avif"; // 👈 apni image

export default function ContactSection() {
  return (
    <section className="relative bg-black py-[110px] px-[60px] overflow-hidden">

      {/* ✨ GOLD GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.06),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-[60px] items-start">

        {/* LEFT - FORM */}
        <div>

          <h2 className="text-[32px] font-serif text-white mb-[30px]">
            Get In <span className="text-[#C8A96A]">Touch</span>
          </h2>

          <form className="grid gap-[20px]">

            {/* NAME + PHONE */}
            <div className="grid grid-cols-2 gap-[15px]">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-transparent border border-[#C8A96A]/30 px-[14px] py-[12px] text-white outline-none focus:border-[#C8A96A]"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="bg-transparent border border-[#C8A96A]/30 px-[14px] py-[12px] text-white outline-none focus:border-[#C8A96A]"
              />
            </div>

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border border-[#C8A96A]/30 px-[14px] py-[12px] text-white outline-none focus:border-[#C8A96A]"
            />

            {/* MESSAGE */}
            <textarea
              rows="5"
              placeholder="Message"
              className="bg-transparent border border-[#C8A96A]/30 px-[14px] py-[12px] text-white outline-none focus:border-[#C8A96A]"
            ></textarea>

            {/* BUTTON */}
            <button className="mt-[10px] bg-[#C8A96A] text-black px-[32px] py-[12px] text-[13px] tracking-[2px] uppercase hover:scale-[1.05] transition hover:shadow-[0_0_20px_rgba(200,169,106,0.5)]">
              Send Message
            </button>

          </form>

        </div>

        {/* RIGHT - INFO */}
        <div>

          {/* IMAGE */}
          <div className="overflow-hidden border border-[#C8A96A]/20 mb-[25px]">
            <img
              src={img}
              alt="contact"
              className="w-full h-full object-cover transition duration-700 hover:scale-[1.05] brightness-[0.85]"
            />
          </div>

          {/* TEXT */}
          <h3 className="text-white text-[18px] mb-[10px]">
            Visit Our Cafes in <span className="text-[#C8A96A]">Delhi NCR</span>
          </h3>

          <p className="text-white/60 text-[13px] mb-[20px]">
            Brewfield Cafe
          </p>

          {/* CONTACT INFO */}
          <div className="space-y-[10px] text-white/70 text-[14px]">

            <div className="flex gap-[10px]">
              <span className="text-[#C8A96A]">📍</span>
              Ghaziabad, Delhi
            </div>

            <div className="flex gap-[10px]">
              <span className="text-[#C8A96A]">✉</span>
              info@cafebrewfield.com
            </div>

            <div className="flex gap-[10px]">
              <span className="text-[#C8A96A]">📞</span>
              +91 9876543210
            </div>

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