export default function FranchiseForm() {
  return (
    <section className="relative bg-black py-[110px] px-[60px] overflow-hidden">

      {/* ✨ GOLD GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.06),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-[1000px] mx-auto">

        {/* TITLE */}
        <h2 className="text-center text-[34px] font-serif text-white mb-[60px]">
          Apply for <span className="text-[#C8A96A]">Franchise</span>
        </h2>

        {/* FORM */}
        <form className="grid md:grid-cols-2 gap-[25px]">

          {/* FULL NAME */}
          <div>
            <label className="text-white/60 text-[12px] mb-2 block">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-transparent border border-[#C8A96A]/30 px-[14px] py-[12px] text-white outline-none focus:border-[#C8A96A] transition"
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="text-white/60 text-[12px] mb-2 block">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter phone number"
              className="w-full bg-transparent border border-[#C8A96A]/30 px-[14px] py-[12px] text-white outline-none focus:border-[#C8A96A] transition"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-white/60 text-[12px] mb-2 block">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full bg-transparent border border-[#C8A96A]/30 px-[14px] py-[12px] text-white outline-none focus:border-[#C8A96A] transition"
            />
          </div>

          {/* CITY */}
          <div>
            <label className="text-white/60 text-[12px] mb-2 block">
              City
            </label>
            <select className="w-full bg-black border border-[#C8A96A]/30 px-[14px] py-[12px] text-white outline-none focus:border-[#C8A96A]">
              <option>Select city</option>
              <option>Delhi</option>
              <option>Noida</option>
              <option>Gurgaon</option>
            </select>
          </div>

          {/* INVESTMENT */}
          <div>
            <label className="text-white/60 text-[12px] mb-2 block">
              Investment Budget
            </label>
            <select className="w-full bg-black border border-[#C8A96A]/30 px-[14px] py-[12px] text-white outline-none focus:border-[#C8A96A]">
              <option>Select budget</option>
              <option>₹10–15 Lakhs</option>
              <option>₹15–25 Lakhs</option>
              <option>₹25–50 Lakhs</option>
            </select>
          </div>

          {/* MESSAGE (FULL WIDTH) */}
          <div className="md:col-span-2">
            <label className="text-white/60 text-[12px] mb-2 block">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full bg-transparent border border-[#C8A96A]/30 px-[14px] py-[12px] text-white outline-none focus:border-[#C8A96A] transition"
            ></textarea>
          </div>

          {/* BUTTON */}
          <div className="md:col-span-2 text-center mt-[10px]">
            <button
              type="submit"
              className="bg-[#C8A96A] text-black px-[40px] py-[14px] text-[13px] tracking-[2px] uppercase transition hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(200,169,106,0.5)]"
            >
              Submit Application
            </button>
          </div>

        </form>

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