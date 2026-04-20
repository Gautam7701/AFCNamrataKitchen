import { motion } from "framer-motion";

import g1 from "../../assets/images/swaad.png";
import g2 from "../../assets/images/momos.png";
import g3 from "../../assets/images/dalkachori.png";
import g4 from "../../assets/images/thali.png";
import g5 from "../../assets/images/dossa.png";
import g6 from "../../assets/images/egg.png";

const images = [
  { img: g1, name: "Home Style Meals" },
  { img: g2, name: "Momos" },
  { img: g3, name: "Dal Kachori" },
  { img: g4, name: "Thali" },
  { img: g5, name: "South Indian" },
  { img: g6, name: "Egg Dishes" },
];

const Gallery = () => {
  return (
    <div className="min-h-screen px-6 py-20 bg-black">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-yellow-400"
        >
          Our Gallery
        </motion.h2>

        <p className="text-white/60 mt-4">
          A glimpse of our delicious creations 🍽️
        </p>

        {/* 🔥 GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-14">
          {images.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.04 }}
              className="relative group rounded-2xl overflow-hidden border border-white/10"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-64 md:h-72 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* Text */}
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition">
                <p className="text-yellow-400 text-lg font-semibold">
                  {item.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;