import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {

  const [formdata, setformdata] = useState({
    name : "",
    email:"",
    meassge:""
  });

  const handleChange = (e) => {
    const { name , value } = e.target;
    setformdata({
        ...formdata,
        [name]:value
      })
  }
  const handleonSubmit = (e) => {
      e.preventDefault();
      
  }
  return (
    <section className="px-6 md:px-20 py-20 w-full max-w-7xl mx-auto">
      <h2 className="skills-title text-3xl md:text-4xl font-bold text-center mb-8">
        Contact <span className="text-blue-500">Us</span>
      </h2>
      <div className="grid grid-cols-1 items-center">
        <div className="bg-transparent border-2 border-white">
          <form
            action=""
            className="bg-transparent backdrop-blur-sm p-6 md:p-8 shadow-lg"
            onSubmit={handleonSubmit}
          >
            <div className="flex flex-col mb-6">
              <label
                htmlFor="name"
                className="text-white/80 mb-2 text-sm font-medium"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition text-white placeholder-white/40"
                placeholder="Your name"
              />
            </div>

            <div className="flex flex-col mb-6">
              <label
                htmlFor="email"
                className="text-white/80 mb-2 text-sm font-medium"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition text-white placeholder-white/40"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="flex flex-col mb-8">
              <label
                htmlFor="message"
                className="text-white/80 mb-2 text-sm font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition text-white placeholder-white/40"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
