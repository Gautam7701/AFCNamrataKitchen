import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import menu1 from "../../assets/images/menu1.jfif";
import menu2 from "../../assets/images/menu2.jfif";
import menu3 from "../../assets/images/menu3.jfif";

const menuImages = [menu1, menu2, menu3];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % menuImages.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? menuImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen px-6 py-16">
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
          Our Menu
        </h2>

        <p className="text-white/70 mt-4">
          Crafted with love, designed for taste 💛
        </p>

        {/* 🔥 PREMIUM PREVIEW */}
        <motion.div
          onClick={() => setOpen(true)}
          whileHover={{ scale: 1.02 }}
          className="mt-12 relative rounded-2xl overflow-hidden border border-white/10 cursor-pointer group"
        >
          {/* Image */}
          <img
            src={menuImages[0]}
            alt="Menu Preview"
            className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">

            <h3 className="text-white text-2xl md:text-3xl font-bold">
              View Full Menu
            </h3>

            <p className="text-white/70 mt-2 text-sm">
              Tap to explore all dishes 🍽️
            </p>

            <div className="mt-4 bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold group-hover:bg-yellow-300 transition">
              Open Menu
            </div>

          </div>
        </motion.div>
      </div>

      {/* 🔥 MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl hover:text-yellow-400 transition z-50"
            >
              ✕
            </button>

            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-6 text-white text-4xl hover:text-yellow-400 transition z-50"
            >
              ‹
            </button>

            {/* Image */}
            <motion.img
              key={current}
              src={menuImages[current]}
              alt="Menu Page"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="max-h-[85vh] max-w-[85%] rounded-xl shadow-2xl"
            />

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-6 text-white text-4xl hover:text-yellow-400 transition z-50"
            >
              ›
            </button>

            {/* Indicator */}
            <div className="absolute bottom-6 text-white text-sm">
              {current + 1} / {menuImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;