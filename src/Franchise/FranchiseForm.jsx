import { motion } from "framer-motion";
import { useState } from "react";

export default function FranchiseForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Form Submitted 🚀");
  };

  return (
    <section className="bg-[#e8d8c3] py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#2d1b12]">
            Apply for{" "}
            <span className="text-[#5a3b2e]">Franchise</span>
          </h2>

          <div className="w-24 h-[2px] bg-[#5a3b2e] mx-auto mt-4"></div>

          <p className="text-[#5c4638] mt-4">
            Start your journey with Cafe Brewfield 🚀
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          {/* INPUT STYLE COMMON */}
          {[
            { name: "name", type: "text", placeholder: "Full Name" },
            { name: "phone", type: "tel", placeholder: "Phone Number" },
            { name: "email", type: "email", placeholder: "Email Address" },
            { name: "city", type: "text", placeholder: "City" },
          ].map((field, i) => (
            <input
              key={i}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={form[field.name]}
              onChange={handleChange}
              required={field.name !== "city"}
              className="border border-[#d6c3b3] bg-[#faf7f2] rounded-xl px-4 py-3 text-[#2d1b12] placeholder-[#7a6252] focus:outline-none focus:ring-2 focus:ring-[#5a3b2e] transition"
            />
          ))}

          {/* SELECT */}
          <select
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className="border border-[#d6c3b3] bg-[#faf7f2] rounded-xl px-4 py-3 text-[#2d1b12] focus:outline-none focus:ring-2 focus:ring-[#5a3b2e]"
          >
            <option value="">Investment Budget</option>
            <option value="10-15L">10–15 Lakhs</option>
            <option value="15-25L">15–25 Lakhs</option>
            <option value="25L+">25+ Lakhs</option>
          </select>

          {/* TEXTAREA */}
          <textarea
            name="message"
            placeholder="Tell us about your plan..."
            rows="4"
            value={form.message}
            onChange={handleChange}
            className="border border-[#d6c3b3] bg-[#faf7f2] rounded-xl px-4 py-3 text-[#2d1b12] placeholder-[#7a6252] md:col-span-2 focus:outline-none focus:ring-2 focus:ring-[#5a3b2e]"
          ></textarea>

          {/* BUTTON */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-[#2d1b12] text-[#f8efe5] px-10 py-3 rounded-full font-semibold shadow-lg hover:scale-105 hover:bg-[#5a3b2e] transition duration-300"
            >
              Submit Application
            </button>
          </div>

        </motion.form>

      </div>
    </section>
  );
}