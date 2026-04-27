import { motion } from "framer-motion";
import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent 🚀");
  };

  return (
    <section className="bg-[#e8d8c3] py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-[#f5efe7] p-8 rounded-2xl shadow-lg space-y-6 border border-[#d6c3b3]"
        >
          <h2 className="text-3xl font-bold text-[#2d1b12]">
            Get In{" "}
            <span className="text-[#5a3b2e]">Touch</span>
          </h2>

          {/* INPUT ROW */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="bg-white border border-[#d6c3b3] px-4 py-3 rounded-lg text-[#2d1b12] placeholder-[#7a6252] focus:outline-none focus:ring-2 focus:ring-[#5a3b2e]"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className="bg-white border border-[#d6c3b3] px-4 py-3 rounded-lg text-[#2d1b12] placeholder-[#7a6252] focus:outline-none focus:ring-2 focus:ring-[#5a3b2e]"
              required
            />

          </div>

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full bg-white border border-[#d6c3b3] px-4 py-3 rounded-lg text-[#2d1b12] placeholder-[#7a6252] focus:outline-none focus:ring-2 focus:ring-[#5a3b2e]"
            required
          />

          {/* MESSAGE */}
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message..."
            onChange={handleChange}
            className="w-full bg-white border border-[#d6c3b3] px-4 py-3 rounded-lg text-[#2d1b12] placeholder-[#7a6252] focus:outline-none focus:ring-2 focus:ring-[#5a3b2e]"
          ></textarea>

          {/* BUTTON */}
          <button className="w-full bg-[#2d1b12] text-[#f8efe5] py-3 rounded-full font-semibold hover:bg-[#5a3b2e] transition duration-300 hover:scale-105">
            Send Message
          </button>

        </motion.form>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >

          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600"
            alt="contact"
            className="rounded-2xl shadow-lg w-full h-[260px] object-cover"
          />

          {/* INFO BOX */}
          <div className="bg-[#f5efe7] p-6 rounded-2xl shadow-md space-y-4 border border-[#d6c3b3]">

            <h3 className="text-xl font-semibold text-[#2d1b12]">
              Visit Our Cafes in Delhi NCR
            </h3>

            <div className="flex items-center gap-3 text-[#5c4638]">
              <FaMapMarkerAlt className="text-[#5a3b2e]" />
              <span>Ghaziabad & Delhi</span>
            </div>

            <div className="flex items-center gap-3 text-[#5c4638]">
              <FaEnvelope className="text-[#5a3b2e]" />
              <span>info@cafebrewfield.com</span>
            </div>

            <div className="flex items-center gap-3 text-[#5c4638]">
              <FaPhone className="text-[#5a3b2e]" />
              <span>+91 9876543210</span>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}