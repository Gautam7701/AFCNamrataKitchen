
import { motion } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const phone = "+919837377354"; // 👉 change this
const whatsappLink = `https://wa.me/${phone}?text=Hi%20I%20want%20to%20order%20food%20from%20AFC%20Namrata's%20Kitchen`;

const Contact = () => {
  return (
    <div className="relative min-h-screen px-6 py-20 overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-400/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-yellow-400"
        >
          Contact Us
        </motion.h2>

        <p className="text-white/70 mt-4">
          Let’s get your order started 💛
        </p>

        {/* 🔥 Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {/* Call */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center transition"
          >
            <FaPhoneAlt className="text-yellow-400 text-3xl mx-auto mb-4" />
            <h3 className="text-white font-semibold text-lg">Call Us</h3>

            <a
              href={`tel:${phone}`}
              className="text-white/70 mt-2 block hover:text-yellow-400"
            >
              {phone}
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center transition"
          >
            <FaMapMarkerAlt className="text-yellow-400 text-3xl mx-auto mb-4" />
            <h3 className="text-white font-semibold text-lg">Location</h3>

            <a
              href="https://maps.google.com"
              target="_blank"
              className="text-white/70 mt-2 block hover:text-yellow-400"
            >
              Meerut, India
            </a>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center transition"
          >
            <FaWhatsapp className="text-yellow-400 text-3xl mx-auto mb-4" />
            <h3 className="text-white font-semibold text-lg">WhatsApp</h3>

            <a
              href={whatsappLink}
              target="_blank"
              className="inline-block mt-3 bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
            >
              Chat Now
            </a>
          </motion.div>

        </div>

        {/* CTA */}
        <div className="mt-12">
          <p className="text-white/70 mb-4">
            Your next meal is just one click away
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition shadow-lg"
          >
            Order on WhatsApp 🚀
          </a>
        </div>

      </div>
    </div>
  );
};

export default Contact;